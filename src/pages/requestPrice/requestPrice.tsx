import React from "react";
import { RequestPriceStyle, BackgroundImage, DetailFormWrapper } from "@pages/requestPrice/requestPriceStyle";
import { FormInput } from "@components/form/generic/formInput/formInput";
import { FormSelectBox } from "@components/form/generic/formSelectBox/formSelectBox";
import { FormButton } from "@components/form/generic/formButton/formButton";


export const RequestPrice: React.FC = () => {

    return (
        <RequestPriceStyle>
            <BackgroundImage>
                <DetailFormWrapper>
                    <form>
                        <FormInput
                            value={""}
                            label="Age of the driver"
                            type="number"
                            required
                            handler={() => null}
                        />
                        <FormSelectBox
                            value={""}
                            label="Car"
                            options={["Audi", "BMW", "Porsche"]}
                            required
                            handler={() => null}
                        />
                        <FormInput
                            value={""}
                            label="Purchase Price"
                            type="number"
                            required
                            handler={() => null}
                            extraLabel={"€"}
                        />
                        <FormButton
                            text={"Get a price"}
                            onSubmit={() => null}>
                        </FormButton>
                    </form>
                </DetailFormWrapper>
            </BackgroundImage>
        </RequestPriceStyle>
    )
}