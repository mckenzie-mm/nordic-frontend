"use server"

export async function getCategories() {
    const response = await fetch("http://localhost:5037/categories");
    const data = await response.json();
    return data;
}