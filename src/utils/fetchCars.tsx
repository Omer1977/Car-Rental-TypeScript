import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "841b7273aemshe4ff2fd82cc7f02p1062cbjsn324cad41644f",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  const {
    make = "bmw",
    model = "m3",
    limit = "5",
    fuel_type = "",
    year = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`,
    options
  );

  const data = await res.json();

  return data;
}
