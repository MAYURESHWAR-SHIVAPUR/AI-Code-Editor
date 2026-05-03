export const executeCode = async ({ code, language, input }) => {
    try {
        const controller = new AbortController();

        // const timeout = await setTimeout(() => {
        //     // controller.abort();
        //     return "Server is out!"

        // }, 1000);

        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code,
                language,
                input
            }),
            // signal: controller.signal
        });

        // clearTimeout(timeout);

        if (!res.ok) {
            return "Server error";
        }

        const result = await res.json();
        console.log(result);
        return result.output || "No Output";


    } catch (error) {
        if (error.name === "AbortError") {
            return "Server timeout";
        }

        if (error instanceof TypeError) {
            return "Server is offline";
        }

        return "Something went wrong";
    }
};