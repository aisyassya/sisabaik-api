export function catatRequest(req, res, next) {
    const mulai = performance.now();

    res.on("finish", () => {
        const durasi = performance.now() - mulai;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${durasi} ms`);
    });

    next();
}