import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Correct the API URL by adding the trailing slash
const API_URL = 'http://localhost:8000/api/products/';

function ProductList() {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const [products, setProducts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            toast.error(`Failed to fetch products: ${error.message}`);
            console.error("Error fetching products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateProduct = () => {
        if (!formData.name.trim()) {
            toast.error("Product name is required");
            return false;
        }
        if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) {
            toast.error("Please enter a valid price");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateProduct()) return;

        setIsLoading(true);

        try {
            const isEditing = editingId !== null;
            const url = isEditing ? `${API_URL}${editingId}/` : API_URL; // Note the trailing slash here too
            const method = isEditing ? 'PUT' : 'POST';

            const productData = {
                ...formData,
                price: parseFloat(formData.price)
            };

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error(`Operation failed with status: ${response.status}`);
            }

            const resultProduct = await response.json();

            if (isEditing) {
                setProducts(products.map(p => p.id === resultProduct.id ? resultProduct : p));
                toast.success("Product updated successfully");
            } else {
                setProducts([...products, resultProduct]);
                toast.success("Product added successfully");
            }

            resetForm();
        } catch (error) {
            toast.error(`Operation failed: ${error.message}`);
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (product) => {
        setEditingId(product.id);
        setFormData({ ...product });
    };

    const handleDelete = async (productId) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;

        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}${productId}/`, { // Note the trailing slash
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Failed to delete product: ${response.status}`);
            }

            await fetchProducts();
            toast.success("Product deleted successfully");
        } catch (error) {
            toast.error(`Failed to delete product: ${error.message}`);
            console.error("Error deleting product:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({ name: '', price: '', description: '', image: '' });
        setEditingId(null);
    };

    return (
        <div className="container py-4">
            <ToastContainer position="top-right" autoClose={5000} />

            {/* Product Form */}
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">
                                {editingId ? 'Edit Product' : 'Add New Product'}
                            </h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Product Name *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Price (KES) *</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        min="0"
                                        step="0.01"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image URL</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        ) : null}
                                        {editingId ? 'Update Product' : 'Add Product'}
                                    </button>
                                    {editingId && (
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={resetForm}
                                            disabled={isLoading}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product List */}
            <h2 className="mb-4">Product List</h2>
            {isLoading && products.length === 0 ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : products.length === 0 ? (
                <div className="alert alert-info">No products found</div>
            ) : (
                <div className="row">
                    {products.map(product => (
                        <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="card-img-top"
                                        style={{ height: "180px", objectFit: "cover" }}
                                    />
                                ) : (
                                    <div className="bg-light d-flex align-items-center justify-content-center"
                                        style={{ height: "180px" }}>
                                        <span className="text-muted">No Image</span>
                                    </div>
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        <strong className="text-primary">
                                            {Number(product.price).toLocaleString()} KES
                                        </strong>
                                    </p>
                                    {product.description && (
                                        <p className="card-text text-muted small">
                                            {product.description.length > 100
                                                ? `${product.description.substring(0, 100)}...`
                                                : product.description}
                                        </p>
                                    )}
                                    <div className="mt-auto pt-3">
                                        <div className="d-flex justify-content-between">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="btn btn-sm btn-outline-primary"
                                                disabled={isLoading}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="btn btn-sm btn-outline-danger"
                                                disabled={isLoading}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductList;