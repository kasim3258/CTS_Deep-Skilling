USE EcommerceDB;

-- Remove table if it already exists
IF OBJECT_ID('Products', 'U') IS NOT NULL
    DROP TABLE Products;

-- Create Table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

-- Insert Data
INSERT INTO Products VALUES
(1, 'Laptop A', 'Electronics', 80000),
(2, 'Laptop B', 'Electronics', 75000),
(3, 'Mobile A', 'Electronics', 75000),
(4, 'Shirt A', 'Fashion', 2500),
(5, 'Shirt B', 'Fashion', 2000),
(6, 'Jeans A', 'Fashion', 2000),
(7, 'Book A', 'Books', 1000),
(8, 'Book B', 'Books', 800),
(9, 'Book C', 'Books', 800);

-- ROW_NUMBER()
SELECT
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Row_Num
FROM Products;

-- RANK()
SELECT
    ProductName,
    Category,
    Price,
    RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Rank_No
FROM Products;

-- DENSE_RANK()
SELECT
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Dense_Rank_No
FROM Products;