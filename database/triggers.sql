DELIMITER //

CREATE TRIGGER PropertyBooked
AFTER INSERT ON Booking
FOR EACH ROW
BEGIN
    UPDATE Property
    SET status='Booked'
    WHERE property_id=NEW.property_id;
END //

CREATE TRIGGER PropertyAvailable
AFTER DELETE ON Booking
FOR EACH ROW
BEGIN
    UPDATE Property
    SET status='Available'
    WHERE property_id=OLD.property_id;
END //

DELIMITER ;