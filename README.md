# css-framework

    <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Responsive Heading
    </h1>
    <div class="hidden md:block">
      This content is hidden on small screens but visible on medium and larger
      screens.
    </div>
    <div class="bg-blue-500 md:bg-red-500 lg:bg-green-500">
      This div will have a blue background by default, red on medium screens,
      and green on large screens.
    </div>
    <div class="text-sm md:text-lg lg:text-xl">
      This text is small on mobile, larger on tablets, and even larger on
      desktops.
    </div>
    <div class="p-4 sm:p-6 md:p-8 lg:p-12">Responsive padding</div>
    <body class="bg-white dark:bg-gray-900 text-black dark:text-white">
      <button id="theme-toggler">Toggle Theme</button>
    </body>
    <div
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4"
    >
      <div class="bg-blue-500 p-4">Item 1</div>
      <div class="bg-green-500 p-4">Item 2</div>
      <div class="bg-red-500 p-4">Item 3</div>
      <div class="bg-yellow-500 p-4">Item 4</div>
      <div class="bg-purple-500 p-4">Item 5</div>
      <div class="bg-pink-500 p-4">Item 6</div>
    </div>
