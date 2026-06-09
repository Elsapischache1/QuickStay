CREATE VIEW AvailableProperties AS
SELECT *
FROM Property
WHERE status='Available';

CREATE VIEW BookingDetails AS
SELECT b.booking_id,
       u.name,
       p.title,
       b.booking_date
FROM Booking b
JOIN Users u ON b.user_id=u.user_id
JOIN Property p ON b.property_id=p.property_id;