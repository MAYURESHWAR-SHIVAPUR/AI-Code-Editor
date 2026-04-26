// src/services/code.service.js

export const executeCode = async ({ code, language, input }) => {
    try {
        const res = await fetch("http://localhost:3000/code/run-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code,
                language,
                input
            })
        });

        if (!res.ok) {
            return "Failed to execute code";
        } else {
            const result = await res.json();

            // const data = await result.run.output || "No Output";
            // return data;
            return result.output
        }

    } catch (error) {
        // return error.message
        return "Failed to Fetch code";

    }
};