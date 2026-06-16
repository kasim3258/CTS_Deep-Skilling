# Lab 1: Understanding ORM with a Retail Inventory System

## What is ORM?

ORM (Object Relational Mapping) maps C# classes to database tables.

Example:

- Product class → Products table
- Category class → Categories table

Benefits:
- Increased productivity
- Reduced SQL coding
- Better maintainability
- Easier database interaction

## EF Core vs EF Framework

### EF Core
- Cross-platform
- Lightweight
- Supports LINQ
- Async queries
- Better performance

### EF Framework (EF6)
- Windows only
- More mature
- Less flexible

## EF Core 8.0 Features

- JSON column mapping
- Compiled models
- Improved performance
- Interceptors
- Better bulk operations

## Project Creation

```bash
dotnet new console -n RetailInventory
cd RetailInventory