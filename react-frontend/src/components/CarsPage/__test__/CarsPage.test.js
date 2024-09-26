import React from "react";
import { render, screen } from "@testing-library/react";

import CarsPage from "../CarsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cars page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CarsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cars-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cars-add-button")).toBeInTheDocument();
});
