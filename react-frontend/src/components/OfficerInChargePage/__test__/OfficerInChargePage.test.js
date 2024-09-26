import React from "react";
import { render, screen } from "@testing-library/react";

import OfficerInChargePage from "../OfficerInChargePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders officerInCharge page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OfficerInChargePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("officerInCharge-datatable")).toBeInTheDocument();
    expect(screen.getByRole("officerInCharge-add-button")).toBeInTheDocument();
});