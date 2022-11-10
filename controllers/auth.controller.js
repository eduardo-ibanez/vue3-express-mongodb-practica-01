
export const register = (req, res) => {
    res.json({
        ok: "register",
        request: req.body,
    })

}

export const login = (req, res) => {
    console.log(req.body)
    res.json({
        ok: "login",
    })
}