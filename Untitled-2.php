 <header id="header" class="fixed-top d-flex align-items-center ">
      <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo"><a href="index.html"><img src="assets/img/logo.png"> </a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href=index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Accueil</a></li>
            <li><a class="nav-link scrollto" href="#about">A propos</a></li>
            <li class="dropdown"><a href="#"><span>Nos services</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto " href="#boutique ">Boutique</a></li>
            <li><a class="nav-link scrollto" href="#team">Notre équipe</a></li>
            <li><a class="nav-link scrollto" href="#pricing">Nos tarifs</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
          <i id="cart-icon" class="bi bi-cart2 scrollto"
            style="margin-left: 80px; transform: scale(2.2); color: blue;"></i>
          <span id="cartIcon" style="background-color: rgb(5, 1, 219); border-radius: 50%; color: white;">0</span>


          <!-- Latérale droite du panier -->
          <div id="cart-sidebar" class="cart-sidebar">
            <i class="fas fa-times close"></i>
            <!-- Contenu du panier ici -->
            <div id="cart-content">
              <!-- Le contenu du panier sera affiché ici -->
            </div>
            <div class="checkout-button-container">
              <button id="checkoutButton">Checkout</button>
            </div>
          </div>



        </nav><!-- .navbar -->

      </div>
    </header><!-- End Header -->
