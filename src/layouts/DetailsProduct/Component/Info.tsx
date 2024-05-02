import React from "react";
import Book from "../../../Models/Book";
import Author from "../../../Models/Author";
interface InfoProps {
   book: Book,
   author: Author[]
}
const Info: React.FC<InfoProps> = ({ book, author }) => {
   return (
      <main className="voucher">
         <div className="container">
            <div className="voucher-content">
               <div className="voucher-header">
                  <i className="fa-solid fa-circle-info"></i>
                  <h2>Thông tin sản phẩm</h2>
               </div>

               <div className="product-info">
                  <ul>
                     <li className="info-label">Mã hàng</li>
                     <li className="info-text">{book.id}</li>
                     <li className="info-label">Tên Nhà Cung Cấp</li>
                     <li>
                        <a href="">Minh Long</a>
                     </li>
                     <li className="info-label">Tác giả</li>
                     <li>
                        <a href="">{author.map((a, index) => (
                           <span key={a.authorName}>
                              {a.authorName}
                              {index !== author.length - 1 && ", "}
                           </span>
                        ))}</a>
                     </li>
                     <li className="info-label">Người dịch</li>
                     <li className="info-text">Nguyễn Phương Thảo</li>
                     <li className="info-label">NXB</li>
                     <li className="info-text">Văn Học</li>
                     <li className="info-label">Năm XB</li>
                     <li className="info-text">2022</li>
                     <li className="info-label">Ngôn ngữ</li>
                     <li className="info-text">Tiếng Việt</li>
                     <li className="info-label">Trọng lượng (gr)</li>
                     <li className="info-text">410</li>
                     <li className="info-label">Kích Thước Bao Bì</li>
                     <li className="info-text">20.5 x 14.5 cm</li>
                     <li className="info-label">Số trang</li>
                     <li className="info-text">404</li>
                     <li className="info-label">Hình thức</li>
                     <li className="info-text">Bìa mềm</li>
                     <li className="info-label">Sản phẩm bán chạy nhất</li>
                     <li>
                        <a href="">Top 100 sản phẩm Kỹ năng sống bán chạy của
                           tháng</a>
                     </li>
                  </ul>
                  <p>
                     Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật
                     hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức
                     và địa chỉ giao hàng mà có thể phát sinh thêm chi phí
                     khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng
                     cồng kềnh,...
                  </p>
                  <span>
                     Chính sách khuyến mãi trên Fahasa.com không áp dụng cho
                     Hệ thống Nhà sách Fahasa trên toàn quốc.
                  </span>
               </div>

               <b>Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Tái Bản 2022)</b>
               <br />
               <span>
                  {book.description}
               </span>
               <div className="info-btn">
                  <a className="trend-link" href="">Xem Thêm</a>
               </div>
            </div>
         </div>
      </main>
   )
}
export default Info;