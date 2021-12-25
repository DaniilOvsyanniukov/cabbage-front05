import { createAction } from "@reduxjs/toolkit";

export const fatchIncomeBriefPerYearRequest = createAction("chosenMonth/fatchIncomeBriefPerYearRequest")
export const fatchIncomeBriefPerYearSuccess = createAction("chosenMonth/fatchIncomeBriefPerYearSuccess")
export const fatchIncomeBriefPerYearError = createAction("chosenMonth/fatchIncomeBriefPerYear")
export const fatchExpenseBriefPerYearRequest = createAction("chosenMonth/fatchExpenseBriefPerYearRequest")
export const fatchExpenseBriefPerYearSuccess = createAction("chosenMonth/fatchExpenseBriefPerYearSuccess")
export const fatchExpenseBriefPerYearError = createAction("chosenMonth/fatchExpenseBriefPerYear")
