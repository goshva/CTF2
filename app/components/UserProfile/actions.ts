"use server";

import { mockUserProfile, mockUserBalance, mockProducts } from './mockData';

export async function fetchUserProfile() {
    try {
        // Заглушка данных
        return mockUserProfile;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
}

export async function fetchUserBalance() {
    try {
        // Заглушка данных
        return mockUserBalance;
    } catch (error) {
        console.error('Error fetching user balance:', error);
        throw error;
    }
}

export async function fetchProducts() {
    try {
        // Заглушка данных
        return mockProducts;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
