import * as _20210526130128_create_markers from "./20210526130128-create-markers"
// @ponicode
describe("_20210526130128_create_markers.up", () => {
    test("0", async () => {
        await _20210526130128_create_markers.up("\"{\"x\":5,\"y\":6}\"", "sqlite")
    })

    test("1", async () => {
        await _20210526130128_create_markers.up("\"{\"x\":[10,null,null,null]}\"", "postgres")
    })

    test("2", async () => {
        await _20210526130128_create_markers.up(false, "a1969970175")
    })

    test("3", async () => {
        await _20210526130128_create_markers.up("\"{\"x\":[10,null,null,null]}\"", 12)
    })

    test("4", async () => {
        await _20210526130128_create_markers.up("\"{\"x\":[10,null,null,null]}\"", "mysql")
    })

    test("5", async () => {
        await _20210526130128_create_markers.up(Infinity, "")
    })
})

// @ponicode
describe("_20210526130128_create_markers.down", () => {
    test("0", async () => {
        await _20210526130128_create_markers.down(false, "sqlite")
    })

    test("1", async () => {
        await _20210526130128_create_markers.down("\"{\"x\":5,\"y\":6}\"", 12)
    })

    test("2", async () => {
        await _20210526130128_create_markers.down("\"{\"x\":5,\"y\":6}\"", "mongo")
    })

    test("3", async () => {
        await _20210526130128_create_markers.down("\"\"2006-01-02T14:04:05.000Z\"\"", "mongo")
    })

    test("4", async () => {
        await _20210526130128_create_markers.down("\"[3,\"false\",false]\"", "mongo")
    })

    test("5", async () => {
        await _20210526130128_create_markers.down(Infinity, "")
    })
})
