export async function my_request(endpoint: string) {
    const response = await fetch(endpoint); // truy cập đến đường dẫn 
    if (!response.ok) { // nếu lỗi trả về
        throw new Error(`Không thể truy cập ${endpoint}`)
    }
    return response.json();
}
