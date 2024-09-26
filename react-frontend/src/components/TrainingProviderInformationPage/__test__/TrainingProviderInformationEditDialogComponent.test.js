import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProviderInformationEditDialogComponent from "../TrainingProviderInformationEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProviderInformation edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProviderInformationEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProviderInformation-edit-dialog-component")).toBeInTheDocument();
});
