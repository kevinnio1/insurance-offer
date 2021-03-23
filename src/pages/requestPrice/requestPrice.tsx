import React, { useState } from "react";
import { RequestPriceStyle, BackgroundImage, DetailFormWrapper, RequestPriceForm } from "@pages/requestPrice/requestPriceStyle";
import { FormInput } from "@components/form/generic/formInput/formInput";
import { FormSelectBox } from "@components/form/generic/formSelectBox/formSelectBox";
import { FormButton } from "@components/form/generic/formButton/formButton";
import { PriceApiService } from "@api/price/price";
import { useHistory } from "react-router";
import { FormInlineError } from "@components/form/generic/formInlineError/formInlineError";
import { LogoutLink } from "@components/generic/logoutLink/logoutLink";


export const RequestPrice: React.FC = (props) => {
    const history = useHistory();

    const [age, setAge] = useState("");
    const [car, setCar] = useState("Audi");
    const [price, setPrice] = useState("");

    const [ageError, setAgeError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [porscheError, setPorscheError] = useState(false);

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setAge(e.target.value)
    }

    const handleCarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setCar(e.target.value);
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPrice(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetErrors();
        if (isDataValid()) {
            const res = await PriceApiService.getPrice({ age, car, price });

            if (res && res.universalPrice && res.globalPrice) {
                history.push(`/plan`, {
                    universalPrice: res.universalPrice,
                    globalPrice: res.globalPrice
                });
            } else {
                // something went wrong - implement messagebox or alert to notify the user
            }
        }

    }

    const resetErrors = () => {
        setPriceError(false);
        setAgeError(false);
        setPorscheError(false);

    }

    const isDataValid = (): Boolean => {

        if (parseFloat(price) < 5000) {
            setPriceError(true);
            return false;
        }

        if (parseInt(age) < 18) {
            setAgeError(true);
            return false;
        }

        if (
            parseInt(age) < 25 &&
            car.toUpperCase() === 'PORSCHE'
        ) {
            setPorscheError(true);
            return false;
        }
        return true;
    }

    return (
        <RequestPriceStyle>
            <BackgroundImage>
                <LogoutLink />
                <DetailFormWrapper>
                    <RequestPriceForm onSubmit={handleSubmit}>
                        <FormInput
                            value={age}
                            label="Age of the driver"
                            type="number"
                            required
                            handler={handleAgeChange}
                            hasError={ageError}
                            errorMessage={"Sorry! The driver is too young"}
                        />
                        <FormSelectBox
                            value={car}
                            label="Car"
                            options={["Audi", "BMW", "Porsche"]}
                            required
                            handler={handleCarChange}
                        />
                        <FormInput
                            value={price}
                            label="Purchase Price"
                            type="number"
                            required
                            handler={handlePriceChange}
                            extraLabel={"€"}
                            hasError={priceError}
                            errorMessage={"Sorry! The price of the car is too low"}
                        />
                        {porscheError && <FormInlineError message="Sorry! We can not accept this particular risk" />}
                        <FormButton
                            text={"Get a price"}
                            handler={() => null}
                        />
                    </RequestPriceForm>
                </DetailFormWrapper>
            </BackgroundImage>
        </RequestPriceStyle>
    )
}