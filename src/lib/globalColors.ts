export function setTheme(theme: "light" | "dark") {
    const body = document.querySelector("body");

    const accentColor = theme === "dark" ? "var(--accent-1)" : "var(--accent-2)"
    const accentColor0 = theme === "dark" ? "var(--accent-1-0)" : "var(--accent-2-0)"
    const backgroundColor = theme === "dark" ? "var(--dark-1)" : "var(--light-1)"
    const backgroundColor2 = theme === "dark" ? "var(--dark-2)" : "var(--light-2)"
    const backgroundColor0 = theme === "dark" ? "var(--dark-1-0)" : "var(--light-1-0)"
    const backgroundColorAlt = theme === "dark" ? "var(--light-1)" : "var(--dark-1)"
    const textColor = theme === "dark" ? "var(--light-1)" : "var(--dark-1)"

    if (body) {
        body?.style.setProperty("--accent-color", accentColor);
        body?.style.setProperty("--accent-color-0", accentColor0);
        body?.style.setProperty("--background-color", backgroundColor);
        body?.style.setProperty("--background-color-2", backgroundColor2);
        body?.style.setProperty("--background-color-0", backgroundColor0);
        body?.style.setProperty("--background-color-alt", backgroundColorAlt);
        body?.style.setProperty("--text-color", textColor);

    } else {
        console.error("BODY NOT FOUND")
    }


}