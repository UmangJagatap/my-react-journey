import { useState } from "react";
import { memo } from "react";

export default function MemoizedEx() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <>
            <form action="">
                <fieldset>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="firstName" />
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="lastName" />
                </fieldset>
            </form>
            <Greeting name={firstName} />
        </>
    );

}

// eslint-disable-next-line react/display-name, react/prop-types
const Greeting = memo(({name})=> {
    console.log("Greeting rendered", new Date().toString());
    return <h1>Hello {name}!</h1>;
});
