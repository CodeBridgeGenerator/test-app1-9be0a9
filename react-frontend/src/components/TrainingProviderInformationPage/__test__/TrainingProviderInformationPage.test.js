import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProviderInformationPage from "../TrainingProviderInformationPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProviderInformation page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProviderInformationPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProviderInformation-datatable")).toBeInTheDocument();
    expect(screen.getByRole("trainingProviderInformation-add-button")).toBeInTheDocument();
});
