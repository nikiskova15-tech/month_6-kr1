const API = "https://dummyjson.com/recipes"

export async function getRecipes({ request }) {
    const url = new URL(request.url)
    const search = url.searchParams.get("search")?.trim() || ""
    const sortBy = url.searchParams.get("sortBy") || "name"
    const order = url.searchParams.get("order") || "asc"

    const apiUrl = new URL(
        search ? `${API}/search` : API
    )

    if (search) {
        apiUrl.searchParams.set("q", search)
    } else {
        apiUrl.searchParams.set("limit", "9")
        apiUrl.searchParams.set("skip", "0")
    }

    apiUrl.searchParams.set("sortBy", sortBy)
    apiUrl.searchParams.set("order", order)

    const response = await fetch(apiUrl)

    if (!response.ok) {
        throw new Error("Не удалось загрузить рецепты")
    }

    return response.json()
}

export async function getRecipe({ params }) {
    const response = await fetch(`${API}/${params.id}`)

    if (!response.ok) {
        throw new Response("Рецепт не найден", { status: 404 })
    }

    return response.json()
}