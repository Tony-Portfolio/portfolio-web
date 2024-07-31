// composables/useScrollReveal.js
export default async function useScrollReveal() {
    if (process.client) {
        const { default: ScrollReveal } = await import("scrollreveal");

        return ScrollReveal();
    }

    return null;
}
