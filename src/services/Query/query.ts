export type GetPaginationQueryParams = {
    page: number
    limit: number
}
type GetPaginationReturn = {
    skip: number,
    limit: number
}
export function getPagination(query: GetPaginationQueryParams): GetPaginationReturn {
    const DEFAULT_PAGE_LIMIT = 0
    const DEFAULT_PAGE_NUMBER = 1

    const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER
    const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT
    const skip = (page - 1) * limit

    return {
        skip,
        limit
    }
}
