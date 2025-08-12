// // import React from 'react';
// // import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';

// // function Home() {
// //   return (
// //     <div className="home-page">
// //       {/* Hero Section with a full-width Carousel.
// //         This section grabs the user's attention with rotating content.
// //       */}
// //       <Carousel controls={false} indicators={false} className="hero-carousel">
// //         {/* Carousel Item 1: Laptops */}
// //         <Carousel.Item interval={4000}>
// //           <img
// //             className="d-block w-100 carousel-image"
// //             src="/images/home/Gaming-Laptop.jpg"
// //             alt="Gaming Laptop"
// //           />
// //           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
// //             <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Unleash Your Potential</h1>
// //             <p className="fs-5 text-white mb-4 text-shadow">Explore the latest high-performance laptops and gear.</p>
// //             <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
// //               Shop Laptops
// //             </Button>
// //           </Carousel.Caption>
// //         </Carousel.Item>
        
// //         {/* Carousel Item 2: Phones */}
// //         <Carousel.Item interval={4000}>
// //           <img
// //             className="d-block w-100 carousel-image"
// //             src="/images/home/Smartphones.jpg"
// //             alt="Smartphones"
// //           />
// //           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
// //             <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Stay Connected</h1>
// //             <p className="fs-5 text-white mb-4 text-shadow">The newest smartphones with cutting-edge technology.</p>
// //             <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
// //               Shop Smartphones
// //             </Button>
// //           </Carousel.Caption>
// //         </Carousel.Item>
        
// //         {/* Carousel Item 3: Gaming Gear */}
// //         <Carousel.Item interval={4000}>
// //           <img
// //             className="d-block w-100 carousel-image"
// //             src="/images/home/Gaming-Gear.jpg"
// //             alt="Gaming Gear"
// //           />
// //           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
// //             <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Dominate the Game</h1>
// //             <p className="fs-5 text-white mb-4 text-shadow">Find the ultimate gaming peripherals and accessories.</p>
// //             <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
// //               Shop Gaming Gear
// //             </Button>
// //           </Carousel.Caption>
// //         </Carousel.Item>
// //       </Carousel>

// //       {/* Main content container */}
// //       <Container className="my-5">
        
// //         {/* Featured Categories Section */}
// //         <h2 className="text-center mb-5 fw-bold">Featured Categories</h2>
// //         <Row className="g-4">
// //           {/* Card for Laptops */}
// //           <Col md={6} lg={3}>
// //             <Card className="h-100 shadow-sm category-card">
// //               <Card.Img 
// //                 variant="top" 
// //                 src="/images/home/Laptop.jpg" 
// //                 alt="Laptops"
// //               />
// //               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
// //                 <Card.Title className="fw-bold">Laptops</Card.Title>
// //                 <Card.Text>
// //                   Powerful machines for work, study, and play.
// //                 </Card.Text>
// //                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
// //                   Explore
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //           </Col>

// //           {/* Card for Smartphones */}
// //           <Col md={6} lg={3}>
// //             <Card className="h-100 shadow-sm category-card">
// //               <Card.Img 
// //                 variant="top" 
// //                 src="/images/home/Smartphones-Card.jpg" 
// //                 alt="Smartphones"
// //               />
// //               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
// //                 <Card.Title className="fw-bold">Smartphones</Card.Title>
// //                 <Card.Text>
// //                   Connect and capture your world with the latest devices.
// //                 </Card.Text>
// //                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
// //                   Explore
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //           </Col>

// //           {/* Card for Accessories */}
// //           <Col md={6} lg={3}>
// //             <Card className="h-100 shadow-sm category-card">
// //               <Card.Img 
// //                 variant="top" 
// //                 src="/images/home/Accesories.jpg" 
// //                 alt="Smartwatches"
// //               />
// //               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
// //                 <Card.Title className="fw-bold">Accessories</Card.Title>
// //                 <Card.Text>
// //                   Enhance your tech with smartwatches, headphones, and more.
// //                 </Card.Text>
// //                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
// //                   Explore
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //           </Col>

// //           {/* Card for Gaming */}
// //           <Col md={6} lg={3}>
// //             <Card className="h-100 shadow-sm category-card">
// //               <Card.Img 
// //                 variant="top" 
// //                 src="/images/home/Gaming.jpg" 
// //                 alt="Gaming Gear"
// //               />
// //               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
// //                 <Card.Title className="fw-bold">Gaming</Card.Title>
// //                 <Card.Text>
// //                   The best gear for gamers, from keyboards to consoles.
// //                 </Card.Text>
// //                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
// //                   Explore
// //                 </Button>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </Container>

// //       {/* About Us Section */}
// //       <Container fluid className="py-5 bg-light about-us-section">
// //         <Row className="justify-content-center">
// //           <Col md={8} className="text-center">
// //             <h2 className="mb-4 fw-bold">Our Mission</h2>
// //             <p className="lead text-muted">
// //               At TECHSHOP, we believe in providing the latest technology
// //               at your fingertips. Our mission is to make innovation
// //               accessible, offering a curated selection of products that
// //               enhance your digital life.
// //             </p>
// //             <Button as={Link} to="#" variant="secondary" className="rounded-pill px-4 mt-3">
// //               Learn More About Us
// //             </Button>
// //           </Col>
// //         </Row>
// //       </Container>

// //       {/* Custom Styles */}
// //       <style>{`
// //         .hero-carousel {
// //           height: 80vh; /* Set a consistent height for the carousel */
// //           overflow: hidden;
// //         }

// //         .carousel-image {
// //           height: 100%;
// //           object-fit: cover;
// //           filter: brightness(60%); /* Darken image for better text readability */
// //         }

// //         .carousel-caption {
// //           position: absolute;
// //           top: 0;
// //           bottom: 0;
// //           left: 0;
// //           right: 0;
// //           padding: 2rem;
// //           color: #fff;
// //           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
// //         }
        
// //         .text-shadow {
// //             text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
// //         }

// //         .category-card {
// //           transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
// //           border: none;
// //           border-radius: 1rem;
// //           overflow: hidden;
// //         }
        
// //         .category-card:hover {
// //           transform: translateY(-5px);
// //           box-shadow: 0 10px 20px rgba(0,0,0,0.1);
// //         }
        
// //         .category-card .card-img-top {
// //           height: 200px;
// //           object-fit: cover;
// //         }
        
// //         .about-us-section {
// //             border-top: 1px solid #e9ecef;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Home;




// import React from 'react';
// import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="home-page">
//       {/* Hero Section with a full-width Carousel.
//         This section grabs the user's attention with rotating content.
        
//         The carousel items now use the image as a background to ensure
//         the images always cover the full area without distortion, regardless
//         of their original aspect ratio.
//       */}
//       <Carousel controls={false} indicators={false} className="hero-carousel">
//         {/* Carousel Item 1: Laptops */}
//         <Carousel.Item interval={4000}>
//           {/* A div is used here to act as a background container */}
//           <div className="carousel-background" style={{ backgroundImage: 'url("/images/home/Gaming-Laptop.jpg")' }} />
          
//           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
//             <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Unleash Your Potential</h1>
//             <p className="fs-5 text-white mb-4 text-shadow">Explore the latest high-performance laptops and gear.</p>
//             <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
//               Shop Laptops
//             </Button>
//           </Carousel.Caption>
//         </Carousel.Item>
        
//         {/* Carousel Item 2: Phones */}
//         <Carousel.Item interval={4000}>
//           <div className="carousel-background" style={{ backgroundImage: 'url("/images/home/Smartphones.jpg")' }} />

//           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
//             <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Stay Connected</h1>
//             <p className="fs-5 text-white mb-4 text-shadow">The newest smartphones with cutting-edge technology.</p>
//             <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
//               Shop Smartphones
//             </Button>
//           </Carousel.Caption>
//         </Carousel.Item>
        
//         {/* Carousel Item 3: Gaming Gear */}
//         <Carousel.Item interval={4000}>
//           <div className="carousel-background" style={{ backgroundImage: 'url("/images/home/Gaming-Gear.jpg")' }} />

//           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
//             <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Dominate the Game</h1>
//             <p className="fs-5 text-white mb-4 text-shadow">Find the ultimate gaming peripherals and accessories.</p>
//             <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
//               Shop Gaming Gear
//             </Button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/* Main content container */}
//       <Container className="my-5">
        
//         {/* Featured Categories Section */}
//         <h2 className="text-center mb-5 fw-bold">Featured Categories</h2>
//         <Row className="g-4">
//           {/* Card for Laptops */}
//           <Col md={6} lg={3}>
//             <Card className="h-100 shadow-sm category-card">
//               <Card.Img 
//                 variant="top" 
//                 src="/images/home/Laptop.jpg" 
//                 alt="Laptops"
//               />
//               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
//                 <Card.Title className="fw-bold">Laptops</Card.Title>
//                 <Card.Text>
//                   Powerful machines for work, study, and play.
//                 </Card.Text>
//                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
//                   Explore
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Card for Smartphones */}
//           <Col md={6} lg={3}>
//             <Card className="h-100 shadow-sm category-card">
//               <Card.Img 
//                 variant="top" 
//                 src="/images/home/Smartphones-Card.jpg" 
//                 alt="Smartphones"
//               />
//               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
//                 <Card.Title className="fw-bold">Smartphones</Card.Title>
//                 <Card.Text>
//                   Connect and capture your world with the latest devices.
//                 </Card.Text>
//                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
//                   Explore
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Card for Accessories */}
//           <Col md={6} lg={3}>
//             <Card className="h-100 shadow-sm category-card">
//               <Card.Img 
//                 variant="top" 
//                 src="/images/home/Accesories.jpg" 
//                 alt="Smartwatches"
//               />
//               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
//                 <Card.Title className="fw-bold">Accessories</Card.Title>
//                 <Card.Text>
//                   Enhance your tech with smartwatches, headphones, and more.
//                 </Card.Text>
//                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
//                   Explore
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Card for Gaming */}
//           <Col md={6} lg={3}>
//             <Card className="h-100 shadow-sm category-card">
//               <Card.Img 
//                 variant="top" 
//                 src="/images/home/Gaming.jpg" 
//                 alt="Gaming Gear"
//               />
//               <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
//                 <Card.Title className="fw-bold">Gaming</Card.Title>
//                 <Card.Text>
//                   The best gear for gamers, from keyboards to consoles.
//                 </Card.Text>
//                 <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
//                   Explore
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* About Us Section */}
//       <Container fluid className="py-5 bg-light about-us-section">
//         <Row className="justify-content-center">
//           <Col md={8} className="text-center">
//             <h2 className="mb-4 fw-bold">Our Mission</h2>
//             <p className="lead text-muted">
//               At TECHSHOP, we believe in providing the latest technology
//               at your fingertips. Our mission is to make innovation
//               accessible, offering a curated selection of products that
//               enhance your digital life.
//             </p>
//             <Button as={Link} to="#" variant="secondary" className="rounded-pill px-4 mt-3">
//               Learn More About Us
//             </Button>
//           </Col>
//         </Row>
//       </Container>

//       {/* Custom Styles */}
//       <style>{`
//         .hero-carousel {
//           height: 80vh; /* Sets a consistent height for the carousel */
//           overflow: hidden;
//         }

//         /* This is the key fix: The inner carousel container needs to fill its parent's height */
//         .carousel-inner {
//             height: 100%;
//         }

//         /* The carousel items now fill the height of the inner container */
//         .carousel-item {
//           height: 100%;
//         }

//         .carousel-background {
//           height: 100%;
//           width: 100%;
//           background-position: center; /* Center the image in the background */
//           background-size: cover; /* Scales the image to cover the entire container */
//           background-repeat: no-repeat;
//           filter: brightness(60%); /* Darkens the image for better text readability */
//         }
        
//         .carousel-caption {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           padding: 2rem;
//           color: #fff;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
//         }
        
//         .text-shadow {
//             text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//         }

//         .category-card {
//           transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
//           border: none;
//           border-radius: 1rem;
//           overflow: hidden;
//         }
        
//         .category-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 20px rgba(0,0,0,0.1);
//         }
        
//         .category-card .card-img-top {
//           height: 200px;
//           object-fit: cover;
//         }
        
//         .about-us-section {
//             border-top: 1px solid #e9ecef;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section with a full-width Carousel.
        This section grabs the user's attention with rotating content.
        
        The carousel now uses an aspect ratio-based container to ensure images
        are displayed consistently without being overly cropped.
      */}
      <Carousel controls={false} indicators={false} className="hero-carousel">
        {/* Carousel Item 1: Laptops */}
        <Carousel.Item interval={4000}>
          {/* A div is used here to act as a background container */}
          <div className="carousel-background" style={{ backgroundImage: 'url("/images/home/Gaming-Laptop.jpg")' }} />
          
          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Unleash Your Potential</h1>
            <p className="fs-5 text-white mb-4 text-shadow">Explore the latest high-performance laptops and gear.</p>
            <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
              Shop Laptops
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        
        {/* Carousel Item 2: Phones */}
        <Carousel.Item interval={4000}>
          <div className="carousel-background" style={{ backgroundImage: 'url("/images/home/Smartphones.jpg")' }} />

          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Stay Connected</h1>
            <p className="fs-5 text-white mb-4 text-shadow">The newest smartphones with cutting-edge technology.</p>
            <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
              Shop Smartphones
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        
        {/* Carousel Item 3: Gaming Gear */}
        <Carousel.Item interval={4000}>
          <div className="carousel-background" style={{ backgroundImage: 'url("/images/home/Gaming-Gear.jpg")' }} />

          <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-3 fw-bold text-white mb-3 text-shadow">Dominate the Game</h1>
            <p className="fs-5 text-white mb-4 text-shadow">Find the ultimate gaming peripherals and accessories.</p>
            <Button as={Link} to="/products" variant="primary" className="btn-lg rounded-pill px-5 py-3 fw-bold">
              Shop Gaming Gear
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Main content container */}
      <Container className="my-5">
        
        {/* Featured Categories Section */}
        <h2 className="text-center mb-5 fw-bold">Featured Categories</h2>
        <Row className="g-4">
          {/* Card for Laptops */}
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm category-card">
              <Card.Img 
                variant="top" 
                src="/images/home/Laptop.jpg" 
                alt="Laptops"
              />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Card.Title className="fw-bold">Laptops</Card.Title>
                <Card.Text>
                  Powerful machines for work, study, and play.
                </Card.Text>
                <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card for Smartphones */}
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm category-card">
              <Card.Img 
                variant="top" 
                src="/images/home/Smartphones-Card.jpg" 
                alt="Smartphones"
              />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Card.Title className="fw-bold">Smartphones</Card.Title>
                <Card.Text>
                  Connect and capture your world with the latest devices.
                </Card.Text>
                <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card for Accessories */}
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm category-card">
              <Card.Img 
                variant="top" 
                src="/images/home/Accesories.jpg" 
                alt="Smartwatches"
              />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Card.Title className="fw-bold">Accessories</Card.Title>
                <Card.Text>
                  Enhance your tech with smartwatches, headphones, and more.
                </Card.Text>
                <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card for Gaming */}
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm category-card">
              <Card.Img 
                variant="top" 
                src="/images/home/Gaming.jpg" 
                alt="Gaming Gear"
              />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
                <Card.Title className="fw-bold">Gaming</Card.Title>
                <Card.Text>
                  The best gear for gamers, from keyboards to consoles.
                </Card.Text>
                <Button as={Link} to="#" variant="primary" className="mt-auto rounded-pill px-4">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About Us Section */}
      <Container fluid className="py-5 bg-light about-us-section">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4 fw-bold">Our Mission</h2>
            <p className="lead text-muted">
              At TECHSHOP, we believe in providing the latest technology
              at your fingertips. Our mission is to make innovation
              accessible, offering a curated selection of products that
              enhance your digital life.
            </p>
            <Button as={Link} to="#" variant="secondary" className="rounded-pill px-4 mt-3">
              Learn More About Us
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>{`
        /* This is the key change to create a responsive aspect ratio */
        .hero-carousel {
          position: relative; /* Needed for positioning the inner content */
          padding-bottom: 56.25%; /* Creates a 16:9 aspect ratio (9 / 16) */
          height: 0; /* Necessary for the padding trick to work */
          overflow: hidden;
        }

        /* The carousel inner container and items must be absolutely positioned
           to fill the space created by the padding-bottom trick */
        .carousel-inner,
        .carousel-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .carousel-background {
          height: 100%;
          width: 100%;
          background-position: center; /* Center the image in the background */
          background-size: cover; /* Scales the image to cover the entire container */
          background-repeat: no-repeat;
          filter: brightness(60%); /* Darkens the image for better text readability */
        }
        
        .carousel-caption {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        
        .text-shadow {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .category-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          border: none;
          border-radius: 1rem;
          overflow: hidden;
        }
        
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .category-card .card-img-top {
          height: 200px;
          object-fit: cover;
        }
        
        .about-us-section {
            border-top: 1px solid #e9ecef;
        }
      `}</style>
    </div>
  );
}

export default Home;
