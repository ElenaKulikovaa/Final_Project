import { useForm } from "react-hook-form";

export default function SignIn() {
    const {register, formState: { errors, isValid }, handleSubmit, reset} = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <div className="container">
            <div className="sign_in">
                <div className="form">
                    <h2 className="form_title">Registration</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <label>
                            &#42;First Name:
                                <input {...register('firstName', {
                                    required: "Required field.",
                                    minLength: {
                                        value: 3,
                                        message: "Min length - 3 characters."
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Max length - 10 characters."
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "Incorrect enter! Please, use Latin only."
                                    }
                                })}/>
                            </label>
                            <div>
                                {errors?.firstName && <p>{errors?.firstName?.message}</p>}
                            </div>
                        </div>

                        <div className="field">
                            <label>
                            &#42;Last Name:
                                <input {...register('lastName', {
                                    required: "Required field.",
                                    minLength: {
                                        value: 3,
                                        message: "Min length - 3 characters."
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Max length - 15 characters."
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: "Incorrect enter! Please, use Latin only."
                                    }                                        
                                })}/>
                            </label>
                            <div>
                                {errors?.lastName && <p>{errors?.lastName?.message}</p>}
                            </div>
                        </div>

                        <div className="field">
                            <label>
                                Gender:
                                <select {...register("gender")}>
                                    <option></option>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </label>
                        </div>

                        <div className="field">
                            <label>
                                Age:
                                <input type="number" {...register('age', {
                                    min: {
                                        value: 16,
                                        message: "Min age is 16 y.o."
                                    },
                                    max: {
                                        value: 99,
                                        message: "Max age is 99 y.o."
                                    }
                                })}/>
                            </label>
                            <div>
                                {errors?.age && <p>{errors?.age?.message}</p>}
                            </div>
                        </div>

                        <div className="field">
                            <label>
                            &#42;Email:
                                <input placeholder="example@gmail.com" {...register('email', {
                                    required: "Required field.",
                                    pattern: {
                                        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                        message: "Please, enter valid email."
                                    }
                                })}/>
                            </label>
                            <div>
                                {errors?.email && <p>{errors?.email?.message}</p>}
                            </div>
                        </div>

                        <div className="field">
                            <label>
                            &#42;Phone Number:
                                <input placeholder="+375..." {...register('phoneNumber', {
                                    required: "Required field.",
                                    pattern: {
                                        value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
                                        message: "Please, write down correct phone number!"
                                    }
                                })}/>
                            </label>
                            <div>
                                {errors?.phoneNumber && <p>{errors?.phoneNumber?.message}</p>}
                            </div>
                        </div>

                        <input type="submit" disabled={!isValid}/>
                    </form>
                </div>
            </div>
        </div>
    )

}