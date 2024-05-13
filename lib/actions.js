"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(asasa, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if(!meal.title || meal.title.trim() == ""){
    return {message : 'Meal title cannot be empty'}
  }

  if(!meal.creator_email || meal.creator_email.includes("@")){
    return {message : 'Email cannot be empty or format email wrong'}
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect("/meals");
}