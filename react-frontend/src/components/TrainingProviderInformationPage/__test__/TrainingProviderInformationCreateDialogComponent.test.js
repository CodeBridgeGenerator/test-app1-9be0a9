import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProviderInformationCreateDialogComponent from "../TrainingProviderInformationCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProviderInformation create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProviderInformationCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProviderInformation-create-dialog-component")).toBeInTheDocument();
});
