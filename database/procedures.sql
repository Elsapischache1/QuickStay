DELIMITER //

CREATE PROCEDURE BookProperty(
IN uid INT,
IN pid INT
)
BEGIN
    INSERT INTO Booking(user_id,property_id,booking_date)
    VALUES(uid,pid,CURDATE());
END //

CREATE PROCEDURE AddProperty(
IN p_title VARCHAR(100),
IN p_location VARCHAR(100),
IN p_price DECIMAL(10,2)
)
BEGIN
    INSERT INTO Property(title,location,price)
    VALUES(p_title,p_location,p_price);
END //

DELIMITER ;