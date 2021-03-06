import React from "react";

const UserProfileMenu = () => {
  return (
    <div
      class="modal right fade user-profile-menu"
      tabindex="-1"
      id="user-profile-menu"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content position-relative">
          {/* <!-- modal-header --> */}
          <div class="modal-header d-flex align-items-center">
            {/* <!-- head for side modal --> */}
            <div class="head-modal-info d-flex align-items-center flex-wrap">
              <figure class="head-modal-info__avatar head-modal-info__avatar--no-img position-relative d-flex align-items-center justify-content-center overflow-hidden">
                <img src="" alt="avatar" />
                <span class="head-modal-info__symbol">AD</span>
              </figure>
              <div class="head-modal-info__description">
                <h2 class="head-modal-info__name">G’day Ann Doe</h2>
                <p class="head-modal-info__subname">
                  <span>Your ID: </span>
                  <span class="head-modal-info__num">3491_5650</span>
                </p>
              </div>
            </div>
            {/* <!-- /head for side modal --> */}
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* <!-- /modal-header --> */}
          {/* <!-- modal-body --> */}
          <div class="modal-body" data-scroll="perfect-scrollbar">
            <div class="modal-container--scroll ">
              <div>
                <section class="section-content">
                  <span class="section-content__title position-relative d-flex align-items-center">
                    My Profile
                  </span>
                  <div class="other-links">
                    <ul class="other-links__list d-flex flex-column list-unstyled mb-0">
                      <li class="other-links__item">
                        <a href="#" class="other-links__link position-relative">
                          <span>View profile</span>
                        </a>
                      </li>
                      <li class="other-links__item">
                        <a href="#" class="other-links__link position-relative">
                          <span>Edit profile</span>
                        </a>
                      </li>
                      <li class="other-links__item">
                        <a
                          href="#"
                          class="other-links__link position-relative d-flex align-items-center"
                        >
                          <span>Change password</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                <section class="section-content">
                  <span class="section-content__title position-relative d-flex align-items-center">
                    My connections
                  </span>
                  <div class="other-links">
                    <ul class="other-links__list d-flex flex-column list-unstyled mb-0">
                      <li class="other-links__item">
                        <a href="#" class="other-links__link position-relative">
                          <span>Family</span>
                          <span class="other-links__int">3</span>
                        </a>
                      </li>
                      <li class="other-links__item">
                        <a href="#" class="other-links__link position-relative">
                          <span>Besties</span>
                          <span class="other-links__int">3</span>
                        </a>
                      </li>
                      <li class="other-links__item">
                        <a
                          href="#"
                          class="other-links__link position-relative d-flex align-items-center"
                        >
                          <span>Friends</span>
                          <span class="other-links__int">3</span>
                        </a>
                      </li>
                      <li class="other-links__item">
                        <a
                          href="#"
                          class="other-links__link position-relative d-flex align-items-center"
                        >
                          <span>Followers</span>
                          <span class="other-links__int">0</span>
                        </a>
                      </li>
                      <li class="other-links__item">
                        <a
                          href="#"
                          class="other-links__link position-relative d-flex align-items-center"
                        >
                          <span>Connections</span>
                          <span class="other-links__int">70</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                <section class="section-content">
                  <span class="section-content__title position-relative d-flex align-items-center section-content__title-bold">
                    Log in like
                  </span>
                  <div class="form__single form__single--select form__single--select-default form__single--fluid">
                    <select
                      class="form__select form__select--default"
                      data-toggle="select"
                    >
                      <option value="user-1">Terry Smith</option>
                      <option value="user-1">Terry Will Green</option>
                    </select>
                  </div>
                </section>
                ​
                <section class="section-content">
                  <span class="section-content__title position-relative d-flex align-items-center section-content__title-bold">
                    my linked stores
                  </span>
                  <form action="#" class="form">
                    <div class="form__single--select-default">
                      <select
                        class="form__select form__select--default"
                        data-toggle="select"
                      >
                        <option value="select-1">
                          Select a store to manage
                        </option>
                        <option value="select-2">
                          Select a store to manage
                        </option>
                        <option value="select-3">
                          Select a store to manage
                        </option>
                      </select>
                    </div>
                  </form>
                </section>
                <section class="section-content">
                  <span class="section-content__title position-relative d-flex align-items-center">
                    Select background
                  </span>
                  <div class="theme-background">
                    <ul class="theme-background__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                      <li class="theme-background__item" data-bg="maze">
                        <a
                          href="#"
                          class="theme-background__link position-relative d-flex flex-column align-items-center justify-content-center"
                        >
                          <figure>
                            <img
                              src="../../images/patern/miniatures/maze.png"
                              alt="theme-one"
                            />
                          </figure>
                          <span>maze</span>
                        </a>
                      </li>
                      <li class="theme-background__item" data-bg="points">
                        <a
                          href="#"
                          class="theme-background__link position-relative d-flex flex-column align-items-center justify-content-center"
                        >
                          <figure>
                            <img
                              src="../../images/patern/miniatures/points.png"
                              alt="theme-two"
                            />
                          </figure>
                          <span>points</span>
                        </a>
                      </li>
                      <li class="theme-background__item" data-bg="grainy">
                        <a
                          href="#"
                          class="theme-background__link position-relative d-flex flex-column align-items-center justify-content-center"
                        >
                          <figure>
                            <img
                              src="../../images/patern/miniatures/grainy.png"
                              alt="theme-three"
                            />
                          </figure>
                          <span>grainy</span>
                        </a>
                      </li>
                      <li class="theme-background__item" data-bg="blue">
                        <a
                          href="#"
                          class="theme-background__link position-relative d-flex flex-column align-items-center justify-content-center"
                        >
                          <figure>
                            <img
                              src="../../images/patern/miniatures/blue.png"
                              alt="theme-four"
                            />
                          </figure>
                          <span>blue</span>
                        </a>
                      </li>
                      <li class="theme-background__item" data-bg="warm">
                        <a
                          href="#"
                          class="theme-background__link position-relative d-flex flex-column align-items-center justify-content-center"
                        >
                          <figure>
                            <img
                              src="../../images/patern/miniatures/warm.png"
                              alt="theme-five"
                            />
                          </figure>
                          <span>warm</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  ​
                </section>
              </div>
            </div>
          </div>
          {/* <!-- /modal-body --> */}
          <div class="modal-footer d-flex flex-row align-items-center justify-content-between">
            <div class="footer-center flex-row justify-content-between p-3">
              <a href="#" class="position-relative d-flex align-items-center">
                <i class="icon icon-menu-settings"></i>
                <span>settings</span>{" "}
              </a>
              <a href="#" class="position-relative d-flex align-items-center">
                <i class="icon icon-menu-exit"></i>
                <span>log out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenu;
