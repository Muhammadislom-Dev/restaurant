import React from "react";
import "./Footer.css";
import pay from "../../assets/images/footer-pay.svg";
import instagram from "../../assets/images/Instagram.svg";
import facebook from "../../assets/images/Facebook.svg";
import linkiden from "../../assets/images/Linkedin.svg";
import twitter from "../../assets/images/Twitter.svg";
import youtube from "../../assets/images/Union.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_middle">
            <ul className="middle_list">
              <li className="middle_item">
                <span className="middle_item_span">
                  70 West Buckingham Ave. Farmingdale, NY 11735
                </span>
              </li>

              <li className="middle_item">contact@greenshop.com</li>

              <li className="middle_item">+88 01911 717 490</li>
            </ul>
          </div>
          <div className="footer_end">
            <ul className="end_list">
              <li className="end_item">
                <strong className="title">My Account</strong>

                <ul className="account_list">
                  <li className="account_item">
                    <a className="link" href="/">
                      My Account
                    </a>
                  </li>

                  <li className="account_item">
                    <a className="link" href="/">
                      Our stores
                    </a>
                  </li>

                  <li className="account_item">
                    <a className="link" href="/">
                      {" "}
                      Contact us
                    </a>
                  </li>

                  <li className="account_item">
                    <a className="link" href="/">
                      Career
                    </a>
                  </li>

                  <li className="account_item">
                    <a className="link" href="/">
                      {" "}
                      Specials
                    </a>
                  </li>
                </ul>
              </li>

              <li className="end_item">
                <strong className="title">Help & Guide</strong>

                <ul className="help_list">
                  <li className="help_item">
                    <a className="link" href="/">
                      Help Center
                    </a>
                  </li>

                  <li className="help_item">
                    <a className="link" href="/">
                      How to Buy
                    </a>
                  </li>

                  <li className="help_item">
                    <a className="link" href="/">
                      Shipping & Delivery
                    </a>
                  </li>

                  <li className="help_item">
                    <a className="link" href="/">
                      Product Policy
                    </a>
                  </li>

                  <li className="help_item">
                    <a className="link" href="/">
                      How to Return
                    </a>
                  </li>
                </ul>
              </li>

              <li className="end_item">
                <strong className="title">Categories</strong>

                <ul className="categories_list">
                  <li className="categories_item">
                    <a className="link" href="/">
                      House Plants
                    </a>
                  </li>

                  <li className="categories_item">
                    <a className="link" href="/">
                      Potter Plants
                    </a>
                  </li>

                  <li className="categories_item">
                    <a className="link" href="/">
                      Seeds
                    </a>
                  </li>

                  <li className="categories_item">
                    <a className="link" href="/">
                      Small Plants
                    </a>
                  </li>

                  <li className="categories_item">
                    <a className="link" href="/">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>

              <li className="end_item">
                <strong className="title">Social Media</strong>

                <ul className="media_list">
                  <li className="media_item">
                    <a className="media_link" href="/">
                      <img src={facebook} alt="Facebook" />
                    </a>
                  </li>

                  <li className="media_item">
                    <a className="media_link" href="/">
                      <img src={instagram} alt="Instagram" />
                    </a>
                  </li>

                  <li className="media_item">
                    <a className="media_link" href="/">
                      <img src={twitter} alt="Twitter" />
                    </a>
                  </li>

                  <li className="media_item">
                    <a className="media_link" href="/">
                      <img src={linkiden} alt="Linkiden" />
                    </a>
                  </li>

                  <li className="media_item">
                    <a className="media_link" href="/">
                      <img src={youtube} alt="Youtube" />
                    </a>
                  </li>
                </ul>

                <strong className="title accep">We accept</strong>
                <img src={pay} alt="Payme" />
              </li>
            </ul>

            <p className="about">
              © {new Date().getFullYear()}GreenShop. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
