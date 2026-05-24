async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));

    if (errorData.errors) {
      let errorMsg = "Dữ liệu không hợp lệ:\n";
      for (const [field, message] of Object.entries(errorData.errors)) {
        errorMsg += `- ${message}\n`;
      }
      throw new Error(errorMsg);
    }


    throw new Error(errorData.message || "Đã có lỗi xảy ra khi lưu sản phẩm!");
  }
  return response.json();
}
