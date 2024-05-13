"use client";

import { useFormState } from 'react-dom'

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message : null})

  return (
    <>
      <header className={classes.header}>
        <h1>
          Login with <span className={classes.highlight}>your account</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}