import axios from "axios";

const URL = "https://dummyjson.com";
export const MEALTYPE = "meal-type";
export const TAG = "tag";
export const LIMIT = 8;

export const getAllDishes = async (callback) => {
  try {
    const response = await axios.get(URL);
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getDishesBy = async (search, offset, callback) => {
  try {
    const response = await axios.get(
      `${URL}/recipes/${search}?limit=${LIMIT}&skip=${offset}&sortBy=rating&order=desc`
    );
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getFeedbacks = async (sortBy, orderBy, callback) => {
  try {
    const response = await axios.get(
      `${URL}/comments?limit=${5}&sortBy=${sortBy}&order=${orderBy}`
    );
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getChefs = async (callback) => {
  try {
    const response = await axios.get(`${URL}/users?limit=${LIMIT}`);
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getUserByID = async (id, callback) => {
  try {
    const response = await axios.get(`${URL}/users/${id}`);
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};
