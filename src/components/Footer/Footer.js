import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {/* About Section */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">CoffeeStyle</h2>
            <p className="mb-4">
              Delivering the best coffee life since 1996. From coffee geeks to the real ones.
            </p>
           
          </div>

          {/* New Links Section */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Về Chúng Tôi</h2>
            <ul className="space-y-2">
              <li><a href="#" className="bao-footer">Về Web của Chúng Tôi</a></li>
              <li><a href="#" className="bao-footer">Về Chúng Tôi</a></li>
              <li><a href="#" className="bao-footer">Điều Khoản Dịch Vụ</a></li>
              <li><a href="#" className="bao-footer">Chính Sách Bảo Mật</a></li>
              <li><a href="#" className="bao-footer">Hướng Dẫn Thanh Toán</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex-1">
  <h2 className="text-xl font-bold mb-2">Follow Us</h2>
  <ul className="space-y-2">
    <li>
      <a href="#" className="bao-footer flex items-center space-x-2">
        <i className="fab fa-facebook-f"></i>
        <span>Facebook</span>
      </a>
    </li>
    <li>
      <a href="#" className="bao-footer flex items-center space-x-2">
        <i className="fab fa-instagram"></i>
        <span>Instagram</span>
      </a>
    </li>
    <li>
      <a href="#" className="bao-footer flex items-center space-x-2">
        <i className="fab fa-youtube"></i>
        <span>YouTube</span>
      </a>
    </li>
    <li>
      <a href="#" className="bao-footer flex items-center space-x-2">
        <i className="fab fa-github"></i>
        <span>GitHub</span>
      </a>
    </li>
  </ul>
</div>


          {/* Fanpage Section */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">Fanpage</h2>
            <p>Follow us on our Facebook fanpage for the latest updates and news.</p>
            <a href="#" className="text-blue-500 bao-footer">Visit our Facebook page</a>
          </div>
        </div>

        {/* Optional: Copyright Section */}
        <div className="text-center text-sm mt-8 uppercase text-orange-500">
          <p>&copy; {new Date().getFullYear()} CoffeeStyle. All rights reserved.</p>
          <p>create by Vu Luong Bao</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
