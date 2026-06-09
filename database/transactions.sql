START TRANSACTION;

INSERT INTO Booking(user_id,property_id,booking_date)
VALUES(1,1,CURDATE());

UPDATE Property
SET status='Booked'
WHERE property_id=1;

COMMIT;


-------

START TRANSACTION;

DELETE FROM Booking
WHERE booking_id=1;

UPDATE Property
SET status='Available'
WHERE property_id=1;

COMMIT;