// Blog posts data
// Add your Medium articles here with their details

export const blogPosts = [
  {
    id: 1,
    title: "How to install OpenCV on Ubuntu Server on Raspberry Pi 4",
    excerpt: "To need Ubuntu server and to need OpenCV, I believe the basic concepts of flashing an Ubuntu image on a Raspberry Pi are no longer an issue, so let's save the stress.",
    date: "March 15, 2024",
    readTime: "8 min read",
    mediumUrl: "https://medium.com/@samueladesola/how-to-install-opencv-on-ubuntu-server-on-raspberry-pi-4-629f3f03d575",
    tags: ["IoT", "Embedded Systems", "Technology", "Raspberry Pi", "OpenCV"],
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*P0n7SOZBC6wQc7yj4e-Sfw.jpeg",
    content: `
        <p>To need Ubuntu server and to need OpenCV, I believe the basic concepts of flashing an Ubuntu image on a Raspberry Pi are no longer an issue, so let's save the stress of what you need to do to set up Ubuntu-supported, detected, libcamera interfaces, server.</p>
  <p>If in any case you need guidance on setting up an Ubuntu server, Canonical has quite well-written up-to-date documentation on that, I believe I can even call it the official documentation, check it out here: <a href="https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#1-overview" target="_blank">Ubuntu Raspberry Pi Guide</a>.</p>

  <h2>Some things you would need</h2>
  <p>Getting the C++ build essentials is always a good thing to do while developing on Ubuntu. Make sure to install the packages using the command below.</p>
  <pre><code>sudo apt install build-essential cmake git libgtk-3-dev libavcodec-dev libavformat-dev libswscale-dev</code></pre>

  <h2>Grab the Package</h2>
  <p>The OpenCV package can be grabbed with the command:</p>
  <pre><code>sudo apt-get install python3-opencv</code></pre>

  <h2>Test the package</h2>
  <p>A quick check you can always run is to see if the package can be imported into Python. From the terminal, type <code>python</code> or <code>python3</code> to enter the Python interpreter, and then try:</p>
  <pre><code>import cv2</code></pre>

  <h2>Robust Test</h2>
  <p>If you have a camera on the Pi, you can test with the code below:</p>
  <pre><code>import cv2

# Open the default camera (0 is usually the built-in webcam)
cap = cv2.VideoCapture(0)

# Check if the camera opened successfully
if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

print("Press 'q' to quit.")

while True:
    # Read a frame from the camera
    ret, frame = cap.read()

    if not ret:
        print("Error: Failed to grab frame.")
        break

    # Display the frame
    cv2.imshow("Webcam Test", frame)

    # Exit if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close windows
cap.release()
cv2.destroyAllWindows()</code></pre>

  <p>If you have an image on the Raspberry Pi, you can test with:</p>
  <pre><code>import cv2

# Load an image
image = cv2.imread('test_image.jpg')  # Make sure 'test_image.jpg' exists in the same folder

# Check if image is loaded properly
if image is None:
    print("Failed to load image.")
else:
    print("Image loaded successfully.")

    # Display the image
    cv2.imshow('Test Image', image)

    # Wait until a key is pressed
    cv2.waitKey(0)

    # Save a copy
    cv2.imwrite('copy_of_test_image.jpg', image)

    # Close the window
    cv2.destroyAllWindows()</code></pre>
    `
  },
  {
    id: 2,
    title: "Building Scalable Embedded Systems",
    excerpt: "Explore advanced techniques for creating robust and scalable embedded systems. From architecture design to implementation strategies, this article covers everything you need to know.",
    date: "February 28, 2024",
    readTime: "12 min read",
    mediumUrl: "https://medium.com/@samueladesola/your-article-url-2",
    tags: ["Embedded Systems", "Software Architecture", "Programming"],
    coverImage: "https://via.placeholder.com/600x300/D2F1E4/4E567E?text=Embedded+Systems",
    content: `
      <p>Building scalable embedded systems requires careful consideration of architecture, resource management, and future growth requirements. In this comprehensive guide, we'll explore the key principles and strategies for creating embedded systems that can evolve with your needs.</p>

      <h2>Understanding Scalability in Embedded Systems</h2>
      <p>Scalability in embedded systems refers to the ability to handle increased loads, add new features, and support more devices without major architectural changes. This involves both horizontal scaling (adding more devices) and vertical scaling (improving individual device capabilities).</p>

      <h2>Modular Architecture Design</h2>
      <p>The foundation of any scalable embedded system is a well-designed modular architecture:</p>
      <ul>
        <li><strong>Layered Architecture:</strong> Separate hardware abstraction, middleware, and application layers</li>
        <li><strong>Component-Based Design:</strong> Create reusable, interchangeable components</li>
        <li><strong>Interface Standardization:</strong> Define clear APIs between modules</li>
        <li><strong>Configuration Management:</strong> Use configuration files for easy customization</li>
      </ul>

      <p>By following these principles and continuously iterating on your design, you can create systems that grow with your needs and stand the test of time.</p>
    `
  },
  {
    id: 3,
    title: "The Future of Smart Devices",
    excerpt: "A deep dive into emerging trends in smart device technology and how they're shaping our connected world. Discover what's next in the IoT landscape.",
    date: "January 20, 2024",
    readTime: "6 min read",
    mediumUrl: "https://medium.com/@samueladesola/your-article-url-3",
    tags: ["Smart Devices", "Future Tech", "Innovation"],
    coverImage: "https://via.placeholder.com/600x300/6B7280/white?text=Smart+Devices",
    content: `
      <p>The landscape of smart devices is evolving at an unprecedented pace, with new technologies and innovations reshaping how we interact with our environment. From AI-powered assistants to edge computing capabilities, the future of smart devices promises to be more intelligent, efficient, and seamlessly integrated into our daily lives.</p>

      <h2>AI at the Edge</h2>
      <p>One of the most significant trends is the integration of artificial intelligence directly into smart devices. Edge AI enables:</p>
      <ul>
        <li>Real-time decision making without cloud dependency</li>
        <li>Enhanced privacy by processing data locally</li>
        <li>Reduced latency for time-critical applications</li>
        <li>Lower bandwidth requirements and costs</li>
      </ul>

      <p>The future of smart devices is bright and full of possibilities. As these technologies mature and converge, we can expect to see devices that are not just smart, but truly intelligent partners in our daily lives.</p>
    `
  }
];

// You can add more blog posts by following the same structure
// To add a new post, simply add a new object to the array above
