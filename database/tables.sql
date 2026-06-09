CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE Property (
    property_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    location VARCHAR(100),
    price DECIMAL(10,2),
    status VARCHAR(20) DEFAULT 'Available'
);

CREATE TABLE Booking (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    property_id INT,
    booking_date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (property_id) REFERENCES Property(property_id)
);

CREATE TABLE Payment (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (booking_id) REFERENCES Booking(booking_id)
);