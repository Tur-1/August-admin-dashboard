<template>
    <section class="main-section">
        <div class="pb-4">
            <div class="dropdown">
                <button class="btn btn-gray-800 d-inline-flex align-items-center me-2 dropdown-toggle"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg class="icon icon-xs me-2"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg> New Task</button>
                <div class="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1"><a
                        class="dropdown-item d-flex align-items-center" href="#"><svg
                            class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                            </path>
                        </svg> Add User </a><a class="dropdown-item d-flex align-items-center" href="#"><svg
                            class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                            </path>
                        </svg> Add Widget </a><a class="dropdown-item d-flex align-items-center" href="#"><svg
                            class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z">
                            </path>
                            <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                        </svg> Upload Files </a><a class="dropdown-item d-flex align-items-center" href="#"><svg
                            class="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg> Preview Security</a>
                    <div role="separator" class="dropdown-divider my-1"></div><a
                        class="dropdown-item d-flex align-items-center" href="#"><svg
                            class="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                clip-rule="evenodd"></path>
                        </svg> Upgrade to Pro</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-4">
                <div class="card bg-yellow-100 border-0 shadow">
                    <div class="card-header d-sm-flex flex-row align-items-center flex-0">
                        <div class="d-block mb-3 mb-sm-0">
                            <div class="fs-5 fw-normal mb-2">Sales Value</div>
                            <h2 class="fs-3 fw-extrabold">$10,567</h2>
                            <div class="small mt-2"><span class="fw-normal me-2">Yesterday</span> <span
                                    class="fas fa-angle-up text-success"></span> <span
                                    class="text-success fw-bold">10.57%</span></div>
                        </div>
                        <div class="d-flex ms-auto"><a href="#"
                                class="btn btn-secondary text-dark btn-sm me-2">Month</a> <a href="#"
                                class="btn btn-dark btn-sm me-3">Week</a></div>
                    </div>
                    <div class="card-body p-2">
                        <div class="ct-chart-sales-value ct-double-octave ct-series-g">
                            <div class="chartist-tooltip" style="top: 334.685px; left: 466.01px;"></div><svg
                                xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%"
                                class="ct-chart-line" style="width: 100%; height: 100%;">
                                <g class="ct-grids">
                                    <line x1="50" x2="50" y1="15" y2="441.2740478515625" class="ct-grid ct-horizontal">
                                    </line>
                                    <line x1="356.6826985677083" x2="356.6826985677083" y1="15" y2="441.2740478515625"
                                        class="ct-grid ct-horizontal"></line>
                                    <line x1="663.3653971354166" x2="663.3653971354166" y1="15" y2="441.2740478515625"
                                        class="ct-grid ct-horizontal"></line>
                                    <line x1="970.048095703125" x2="970.048095703125" y1="15" y2="441.2740478515625"
                                        class="ct-grid ct-horizontal"></line>
                                    <line x1="1276.7307942708333" x2="1276.7307942708333" y1="15" y2="441.2740478515625"
                                        class="ct-grid ct-horizontal"></line>
                                    <line x1="1583.4134928385415" x2="1583.4134928385415" y1="15" y2="441.2740478515625"
                                        class="ct-grid ct-horizontal"></line>
                                    <line x1="1890.09619140625" x2="1890.09619140625" y1="15" y2="441.2740478515625"
                                        class="ct-grid ct-horizontal"></line>
                                </g>
                                <g>
                                    <g class="ct-series ct-series-a">
                                        <path
                                            d="M50,441.274L50,441.274C152.228,427.065,254.455,417.592,356.683,398.647C458.91,379.701,561.138,332.337,663.365,313.392C765.593,294.446,867.821,293.499,970.048,270.764C1072.276,248.03,1174.503,100.255,1276.731,100.255C1378.958,100.255,1481.186,185.51,1583.413,185.51C1685.641,185.51,1787.869,71.837,1890.096,15L1890.096,441.274Z"
                                            class="ct-area"></path>
                                        <path
                                            d="M50,441.274C152.228,427.065,254.455,417.592,356.683,398.647C458.91,379.701,561.138,332.337,663.365,313.392C765.593,294.446,867.821,293.499,970.048,270.764C1072.276,248.03,1174.503,100.255,1276.731,100.255C1378.958,100.255,1481.186,185.51,1583.413,185.51C1685.641,185.51,1787.869,71.837,1890.096,15"
                                            class="ct-line"></path>
                                        <line x1="50" y1="441.2740478515625" x2="50.01" y2="441.2740478515625"
                                            class="ct-point" ct:value="0"></line>
                                        <line x1="356.6826985677083" y1="398.6466430664062" x2="356.6926985677083"
                                            y2="398.6466430664062" class="ct-point" ct:value="10"></line>
                                        <line x1="663.3653971354166" y1="313.39183349609374" x2="663.3753971354166"
                                            y2="313.39183349609374" class="ct-point" ct:value="30"></line>
                                        <line x1="970.048095703125" y1="270.7644287109375" x2="970.058095703125"
                                            y2="270.7644287109375" class="ct-point" ct:value="40"></line>
                                        <line x1="1276.7307942708333" y1="100.25480957031249" x2="1276.7407942708332"
                                            y2="100.25480957031249" class="ct-point" ct:value="80"></line>
                                        <line x1="1583.4134928385415" y1="185.509619140625" x2="1583.4234928385415"
                                            y2="185.509619140625" class="ct-point" ct:value="60"></line>
                                        <line x1="1890.09619140625" y1="15" x2="1890.10619140625" y2="15"
                                            class="ct-point" ct:value="100"></line>
                                    </g>
                                </g>
                                <g class="ct-labels">
                                    <foreignObject style="overflow: visible;" x="50" y="446.2740478515625"
                                        width="306.6826985677083" height="20"><span
                                            class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/"
                                            style="width: 307px; height: 20px;">Mon</span></foreignObject>
                                    <foreignObject style="overflow: visible;" x="356.6826985677083"
                                        y="446.2740478515625" width="306.6826985677083" height="20"><span
                                            class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/"
                                            style="width: 307px; height: 20px;">Tue</span></foreignObject>
                                    <foreignObject style="overflow: visible;" x="663.3653971354166"
                                        y="446.2740478515625" width="306.68269856770837" height="20"><span
                                            class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/"
                                            style="width: 307px; height: 20px;">Wed</span></foreignObject>
                                    <foreignObject style="overflow: visible;" x="970.048095703125" y="446.2740478515625"
                                        width="306.68269856770826" height="20"><span
                                            class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/"
                                            style="width: 307px; height: 20px;">Thu</span></foreignObject>
                                    <foreignObject style="overflow: visible;" x="1276.7307942708333"
                                        y="446.2740478515625" width="306.68269856770826" height="20"><span
                                            class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/"
                                            style="width: 307px; height: 20px;">Fri</span></foreignObject>
                                    <foreignObject style="overflow: visible;" x="1583.4134928385415"
                                        y="446.2740478515625" width="306.6826985677085" height="20"><span
                                            class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/"
                                            style="width: 307px; height: 20px;">Sat</span></foreignObject>
                                    <foreignObject style="overflow: visible;" x="1890.09619140625" y="446.2740478515625"
                                        width="30" height="20"><span class="ct-label ct-horizontal ct-end"
                                            xmlns="http://www.w3.org/2000/xmlns/"
                                            style="width: 30px; height: 20px;">Sun</span></foreignObject>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-4 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <div class="row d-block d-xl-flex align-items-center">
                            <div
                                class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                <div class="icon-shape icon-shape-primary rounded me-4 me-sm-0"><svg
                                        class="icon icon-md" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                        </path>
                                    </svg></div>
                                <div class="d-sm-none">
                                    <h2 class="h5">Customers</h2>
                                    <h3 class="fw-extrabold mb-1">345,678</h3>
                                </div>
                            </div>
                            <div class="col-12 col-xl-7 px-xl-0">
                                <div class="d-none d-sm-block">
                                    <h2 class="h5">Customers</h2>
                                    <h3 class="fw-extrabold mb-1">345k</h3>
                                </div><small class="d-flex align-items-center">Feb 1 - Apr 1, <svg
                                        class="icon icon-xxs text-gray-500 ms-2 me-1" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                            clip-rule="evenodd"></path>
                                    </svg> SUA</small>
                                <div class="small d-flex mt-1"><svg class="icon icon-xs text-success"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div><span class="text-success fw-bolder me-1">22%</span> Since last month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-4 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <div class="row d-block d-xl-flex align-items-center">
                            <div
                                class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                <div class="icon-shape icon-shape-secondary rounded me-4 me-sm-0"><svg
                                        class="icon icon-md" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                                <div class="d-sm-none">
                                    <h2 class="fw-extrabold h5">Revenue</h2>
                                    <h3 class="mb-1">$43,594</h3>
                                </div>
                            </div>
                            <div class="col-12 col-xl-7 px-xl-0">
                                <div class="d-none d-sm-block">
                                    <h2 class="h5">Revenue</h2>
                                    <h3 class="fw-extrabold mb-1">$43,594</h3>
                                </div><small class="d-flex align-items-center">Feb 1 - Apr 1, <svg
                                        class="icon icon-xxs text-gray-500 ms-2 me-1" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                            clip-rule="evenodd"></path>
                                    </svg> SUA</small>
                                <div class="small d-flex mt-1"><svg class="icon icon-xs text-danger" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div><span class="text-danger fw-bolder me-1">2%</span> Since last month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-4 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <div class="row d-block d-xl-flex align-items-center">
                            <div
                                class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                <div class="icon-shape icon-shape-tertiary rounded me-4 me-sm-0"><svg
                                        class="icon icon-md" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"></path>
                                    </svg></div>
                                <div class="d-sm-none">
                                    <h2 class="fw-extrabold h5">Bounce Rate</h2>
                                    <h3 class="mb-1">50.88%</h3>
                                </div>
                            </div>
                            <div class="col-12 col-xl-7 px-xl-0">
                                <div class="d-none d-sm-block">
                                    <h2 class="h5">Bounce Rate</h2>
                                    <h3 class="fw-extrabold mb-1">50.88%</h3>
                                </div><small>Feb 1 - Apr 1</small>
                                <div class="small d-flex mt-1"><svg class="icon icon-xs text-success"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div><span class="text-success fw-bolder me-1">4%</span> Since last month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-xl-8">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="card border-0 shadow">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h2 class="fs-5 fw-bold mb-0">Page visits</h2>
                                    </div>
                                    <div class="col text-end"><a href="#" class="btn btn-sm btn-primary">See all</a>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table align-items-center table-flush">
                                    <thead class="thead-light">
                                        <tr>
                                            <th class="border-bottom" scope="col">Page name</th>
                                            <th class="border-bottom" scope="col">Page Views</th>
                                            <th class="border-bottom" scope="col">Page Value</th>
                                            <th class="border-bottom" scope="col">Bounce rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="text-gray-900" scope="row">/demo/admin/index.html</th>
                                            <td class="fw-bolder text-gray-500">3,225</td>
                                            <td class="fw-bolder text-gray-500">$20</td>
                                            <td class="fw-bolder text-gray-500">
                                                <div class="d-flex"><svg class="icon icon-xs text-danger me-2"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> 42,55%</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-gray-900" scope="row">/demo/admin/forms.html</th>
                                            <td class="fw-bolder text-gray-500">2,987</td>
                                            <td class="fw-bolder text-gray-500">0</td>
                                            <td class="fw-bolder text-gray-500">
                                                <div class="d-flex"><svg class="icon icon-xs text-success me-2"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> 43,24%</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-gray-900" scope="row">/demo/admin/util.html</th>
                                            <td class="fw-bolder text-gray-500">2,844</td>
                                            <td class="fw-bolder text-gray-500">294</td>
                                            <td class="fw-bolder text-gray-500">
                                                <div class="d-flex"><svg class="icon icon-xs text-success me-2"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> 32,35%</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-gray-900" scope="row">/demo/admin/validation.html</th>
                                            <td class="fw-bolder text-gray-500">2,050</td>
                                            <td class="fw-bolder text-gray-500">$147</td>
                                            <td class="fw-bolder text-gray-500">
                                                <div class="d-flex"><svg class="icon icon-xs text-danger me-2"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> 50,87%</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-gray-900" scope="row">/demo/admin/modals.html</th>
                                            <td class="fw-bolder text-gray-500">1,483</td>
                                            <td class="fw-bolder text-gray-500">$19</td>
                                            <td class="fw-bolder text-gray-500">
                                                <div class="d-flex"><svg class="icon icon-xs text-success me-2"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> 26,12%</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xxl-6 mb-4">
                        <div class="card border-0 shadow">
                            <div class="card-header border-bottom d-flex align-items-center justify-content-between">
                                <h2 class="fs-5 fw-bold mb-0">Team members</h2><a href="#"
                                    class="btn btn-sm btn-primary">See all</a>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush list my--3">
                                    <li class="list-group-item px-0">
                                        <div class="row align-items-center">
                                            <div class="col-auto"> <a href="#" class="avatar"><img class="rounded"
                                                        alt="Image placeholder"
                                                        src="../../assets/img/team/profile-picture-1.jpg"></a></div>
                                            <div class="col-auto ms--2">
                                                <h4 class="h6 mb-0"><a href="#">Chris Wood</a></h4>
                                                <div class="d-flex align-items-center">
                                                    <div class="bg-success dot rounded-circle me-1"></div>
                                                    <small>Online</small>
                                                </div>
                                            </div>
                                            <div class="col text-end"><a href="#"
                                                    class="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
                                                        class="icon icon-xxs me-2" fill="currentColor"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> Invite</a></div>
                                        </div>
                                    </li>
                                    <li class="list-group-item px-0">
                                        <div class="row align-items-center">
                                            <div class="col-auto"> <a href="#" class="avatar"><img
                                                        class="rounded-circle" alt="Image placeholder"
                                                        src="../../assets/img/team/profile-picture-2.jpg"></a></div>
                                            <div class="col-auto ms--2">
                                                <h4 class="h6 mb-0"><a href="#">Jose Leos</a></h4>
                                                <div class="d-flex align-items-center">
                                                    <div class="bg-warning dot rounded-circle me-1"></div><small>In a
                                                        meeting</small>
                                                </div>
                                            </div>
                                            <div class="col text-end"><a href="#"
                                                    class="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
                                                        class="icon icon-xxs me-2" fill="currentColor"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> Message</a></div>
                                        </div>
                                    </li>
                                    <li class="list-group-item px-0">
                                        <div class="row align-items-center">
                                            <div class="col-auto"> <a href="#" class="avatar"><img
                                                        class="rounded-circle" alt="Image placeholder"
                                                        src="../../assets/img/team/profile-picture-3.jpg"></a></div>
                                            <div class="col-auto ms--2">
                                                <h4 class="h6 mb-0"><a href="#">Bonnie Green</a></h4>
                                                <div class="d-flex align-items-center">
                                                    <div class="bg-danger dot rounded-circle me-1"></div>
                                                    <small>Offline</small>
                                                </div>
                                            </div>
                                            <div class="col text-end"><a href="#"
                                                    class="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
                                                        class="icon icon-xxs me-2" fill="currentColor"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> Message</a></div>
                                        </div>
                                    </li>
                                    <li class="list-group-item px-0">
                                        <div class="row align-items-center">
                                            <div class="col-auto"> <a href="#" class="avatar"><img
                                                        class="rounded-circle" alt="Image placeholder"
                                                        src="../../assets/img/team/profile-picture-4.jpg"></a></div>
                                            <div class="col-auto ms--2">
                                                <h4 class="h6 mb-0"><a href="#">Neil Sims</a></h4>
                                                <div class="d-flex align-items-center">
                                                    <div class="bg-danger dot rounded-circle me-1"></div>
                                                    <small>Offline</small>
                                                </div>
                                            </div>
                                            <div class="col text-end"><a href="#"
                                                    class="btn btn-sm btn-secondary d-inline-flex align-items-center"><svg
                                                        class="icon icon-xxs me-2" fill="currentColor"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> Message</a></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xxl-6 mb-4">
                        <div class="card border-0 shadow">
                            <div class="card-header border-bottom d-flex align-items-center justify-content-between">
                                <h2 class="fs-5 fw-bold mb-0">Progress track</h2><a href="#"
                                    class="btn btn-sm btn-primary">See tasks</a>
                            </div>
                            <div class="card-body">
                                <div class="row mb-4">
                                    <div class="col-auto"><svg class="icon icon-sm text-gray-500" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd"
                                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                    <div class="col">
                                        <div class="progress-wrapper">
                                            <div class="progress-info">
                                                <div class="h6 mb-0">Rocket - SaaS Template</div>
                                                <div class="small fw-bold text-gray-500"><span>75 %</span></div>
                                            </div>
                                            <div class="progress mb-0">
                                                <div class="progress-bar bg-success" role="progressbar"
                                                    aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                                    style="width: 75%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-auto"><svg class="icon icon-sm text-gray-500" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd"
                                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                    <div class="col">
                                        <div class="progress-wrapper">
                                            <div class="progress-info">
                                                <div class="h6 mb-0">Themesberg - Design System</div>
                                                <div class="small fw-bold text-gray-500"><span>60 %</span></div>
                                            </div>
                                            <div class="progress mb-0">
                                                <div class="progress-bar bg-success" role="progressbar"
                                                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                    style="width: 60%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-4">
                                    <div class="col-auto"><svg class="icon icon-sm text-gray-500" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd"
                                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                    <div class="col">
                                        <div class="progress-wrapper">
                                            <div class="progress-info">
                                                <div class="h6 mb-0">Homepage Design in Figma</div>
                                                <div class="small fw-bold text-gray-500"><span>45 %</span></div>
                                            </div>
                                            <div class="progress mb-0">
                                                <div class="progress-bar bg-warning" role="progressbar"
                                                    aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"
                                                    style="width: 45%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-auto"><svg class="icon icon-sm text-gray-500" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd"
                                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                    <div class="col">
                                        <div class="progress-wrapper">
                                            <div class="progress-info">
                                                <div class="h6 mb-0">Backend for Themesberg v2</div>
                                                <div class="small fw-bold text-gray-500"><span>34 %</span></div>
                                            </div>
                                            <div class="progress mb-0">
                                                <div class="progress-bar bg-danger" role="progressbar"
                                                    aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"
                                                    style="width: 34%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-4">
                <div class="col-12 px-0 mb-4">
                    <div class="card border-0 shadow">
                        <div class="card-header d-flex flex-row align-items-center flex-0 border-bottom">
                            <div class="d-block">
                                <div class="h6 fw-normal text-gray mb-2">Total orders</div>
                                <h2 class="h3 fw-extrabold">452</h2>
                                <div class="small mt-2"><span class="fas fa-angle-up text-success"></span> <span
                                        class="text-success fw-bold">18.2%</span></div>
                            </div>
                            <div class="d-block ms-auto">
                                <div class="d-flex align-items-center text-end mb-2"><span
                                        class="dot rounded-circle bg-gray-800 me-2"></span> <span
                                        class="fw-normal small">July</span></div>
                                <div class="d-flex align-items-center text-end"><span
                                        class="dot rounded-circle bg-secondary me-2"></span> <span
                                        class="fw-normal small">August</span></div>
                            </div>
                        </div>
                        <div class="card-body p-2">
                            <div class="ct-chart-ranking ct-golden-section ct-series-a">
                                <div class="chartist-tooltip"></div><svg
                                    xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%"
                                    class="ct-chart-bar" style="width: 100%; height: 100%;">
                                    <g class="ct-grids">
                                        <line x1="10" x2="10" y1="15" y2="340.9975891113281"
                                            class="ct-grid ct-horizontal">
                                        </line>
                                        <line x1="107.22957356770833" x2="107.22957356770833" y1="15"
                                            y2="340.9975891113281" class="ct-grid ct-horizontal"></line>
                                        <line x1="204.45914713541666" x2="204.45914713541666" y1="15"
                                            y2="340.9975891113281" class="ct-grid ct-horizontal"></line>
                                        <line x1="301.688720703125" x2="301.688720703125" y1="15" y2="340.9975891113281"
                                            class="ct-grid ct-horizontal"></line>
                                        <line x1="398.9182942708333" x2="398.9182942708333" y1="15"
                                            y2="340.9975891113281" class="ct-grid ct-horizontal"></line>
                                        <line x1="496.14786783854163" x2="496.14786783854163" y1="15"
                                            y2="340.9975891113281" class="ct-grid ct-horizontal"></line>
                                    </g>
                                    <g>
                                        <g class="ct-series ct-series-a">
                                            <line x1="51.114786783854164" x2="51.114786783854164" y1="340.9975891113281"
                                                y2="300.2478904724121" class="ct-bar" ct:value="1"></line>
                                            <line x1="148.3443603515625" x2="148.3443603515625" y1="340.9975891113281"
                                                y2="137.24909591674805" class="ct-bar" ct:value="5"></line>
                                            <line x1="245.57393391927081" x2="245.57393391927081" y1="340.9975891113281"
                                                y2="259.4981918334961" class="ct-bar" ct:value="2"></line>
                                            <line x1="342.8035074869792" x2="342.8035074869792" y1="340.9975891113281"
                                                y2="137.24909591674805" class="ct-bar" ct:value="5"></line>
                                            <line x1="440.0330810546875" x2="440.0330810546875" y1="340.9975891113281"
                                                y2="177.99879455566406" class="ct-bar" ct:value="4"></line>
                                            <line x1="537.2626546223958" x2="537.2626546223958" y1="340.9975891113281"
                                                y2="218.74849319458008" class="ct-bar" ct:value="3"></line>
                                        </g>
                                        <g class="ct-series ct-series-b">
                                            <line x1="66.11478678385416" x2="66.11478678385416" y1="340.9975891113281"
                                                y2="259.4981918334961" class="ct-bar" ct:value="2"></line>
                                            <line x1="163.3443603515625" x2="163.3443603515625" y1="340.9975891113281"
                                                y2="218.74849319458008" class="ct-bar" ct:value="3"></line>
                                            <line x1="260.5739339192708" x2="260.5739339192708" y1="340.9975891113281"
                                                y2="177.99879455566406" class="ct-bar" ct:value="4"></line>
                                            <line x1="357.8035074869792" x2="357.8035074869792" y1="340.9975891113281"
                                                y2="15" class="ct-bar" ct:value="8"></line>
                                            <line x1="455.0330810546875" x2="455.0330810546875" y1="340.9975891113281"
                                                y2="300.2478904724121" class="ct-bar" ct:value="1"></line>
                                            <line x1="552.2626546223958" x2="552.2626546223958" y1="340.9975891113281"
                                                y2="259.4981918334961" class="ct-bar" ct:value="2"></line>
                                        </g>
                                    </g>
                                    <g class="ct-labels">
                                        <foreignObject style="overflow: visible;" x="10" y="345.9975891113281"
                                            width="97.22957356770833" height="20"><span
                                                class="ct-label ct-horizontal ct-end"
                                                xmlns="http://www.w3.org/2000/xmlns/"
                                                style="width: 97px; height: 20px;">Mon</span></foreignObject>
                                        <foreignObject style="overflow: visible;" x="107.22957356770833"
                                            y="345.9975891113281" width="97.22957356770833" height="20"><span
                                                class="ct-label ct-horizontal ct-end"
                                                xmlns="http://www.w3.org/2000/xmlns/"
                                                style="width: 97px; height: 20px;">Tue</span></foreignObject>
                                        <foreignObject style="overflow: visible;" x="204.45914713541666"
                                            y="345.9975891113281" width="97.22957356770834" height="20"><span
                                                class="ct-label ct-horizontal ct-end"
                                                xmlns="http://www.w3.org/2000/xmlns/"
                                                style="width: 97px; height: 20px;">Wed</span></foreignObject>
                                        <foreignObject style="overflow: visible;" x="301.688720703125"
                                            y="345.9975891113281" width="97.22957356770831" height="20"><span
                                                class="ct-label ct-horizontal ct-end"
                                                xmlns="http://www.w3.org/2000/xmlns/"
                                                style="width: 97px; height: 20px;">Thu</span></foreignObject>
                                        <foreignObject style="overflow: visible;" x="398.9182942708333"
                                            y="345.9975891113281" width="97.22957356770831" height="20"><span
                                                class="ct-label ct-horizontal ct-end"
                                                xmlns="http://www.w3.org/2000/xmlns/"
                                                style="width: 97px; height: 20px;">Fri</span></foreignObject>
                                        <foreignObject style="overflow: visible;" x="496.14786783854163"
                                            y="345.9975891113281" width="97.22957356770837" height="20"><span
                                                class="ct-label ct-horizontal ct-end"
                                                xmlns="http://www.w3.org/2000/xmlns/"
                                                style="width: 97px; height: 20px;">Sat</span></foreignObject>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 px-0 mb-4">
                    <div class="card border-0 shadow">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between border-bottom pb-3">
                                <div>
                                    <div class="h6 mb-0 d-flex align-items-center"><svg
                                            class="icon icon-xs text-gray-500 me-2" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                                clip-rule="evenodd"></path>
                                        </svg> Global Rank</div>
                                </div>
                                <div><a href="#" class="d-flex align-items-center fw-bold">#755 <svg
                                            class="icon icon-xs text-gray-500 ms-1" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"></path>
                                        </svg></a></div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between border-bottom py-3">
                                <div>
                                    <div class="h6 mb-0 d-flex align-items-center"><svg
                                            class="icon icon-xs text-gray-500 me-2" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                                clip-rule="evenodd"></path>
                                        </svg> Country Rank</div>
                                    <div class="small card-stats">United States <svg class="icon icon-xs text-success"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                </div>
                                <div><a href="#" class="d-flex align-items-center fw-bold">#32 <svg
                                            class="icon icon-xs text-gray-500 ms-1" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"></path>
                                        </svg></a></div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between pt-3">
                                <div>
                                    <div class="h6 mb-0 d-flex align-items-center"><svg
                                            class="icon icon-xs text-gray-500 me-2" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                                clip-rule="evenodd"></path>
                                            <path
                                                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z">
                                            </path>
                                        </svg> Category Rank</div>
                                    <div class="small card-stats">Computers Electronics &gt; Technology <svg
                                            class="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                </div>
                                <div><a href="#" class="d-flex align-items-center fw-bold">#11 <svg
                                            class="icon icon-xs text-gray-500 ms-1" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"></path>
                                        </svg></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 px-0">
                    <div class="card border-0 shadow">
                        <div class="card-body">
                            <h2 class="fs-5 fw-bold mb-1">Acquisition</h2>
                            <p>Tells you where your visitors originated from, such as search engines, social networks or
                                website referrals.</p>
                            <div class="d-block">
                                <div class="d-flex align-items-center me-5">
                                    <div class="icon-shape icon-sm icon-shape-danger rounded me-3"><svg
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                    <div class="d-block"><label class="mb-0">Bounce Rate</label>
                                        <h4 class="mb-0">33.50%</h4>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center pt-3">
                                    <div class="icon-shape icon-sm icon-shape-purple rounded me-3"><svg
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z">
                                            </path>
                                        </svg></div>
                                    <div class="d-block"><label class="mb-0">Sessions</label>
                                        <h4 class="mb-0">9,567</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="theme-settings card bg-gray-800 pt-2 collapse" id="theme-settings">
            <div class="card-body bg-gray-800 text-white pt-4"><button type="button"
                    class="btn-close theme-settings-close collapsed" aria-label="Close" data-bs-toggle="collapse"
                    href="#theme-settings" role="button" aria-expanded="false" aria-controls="theme-settings"></button>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <p class="m-0 mb-1 me-4 fs-7">Open source <span role="img" aria-label="gratitude">💛</span></p>
                    <span></span>
                </div><a href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
                    target="_blank"
                    class="btn btn-secondary d-inline-flex align-items-center justify-content-center mb-3 w-100">Download
                    <svg class="icon icon-xs ms-2" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                            clip-rule="evenodd"></path>
                    </svg></a>
                <p class="fs-7 text-gray-300 text-center">Available in the following technologies:</p>
                <div class="d-flex justify-content-center"><a class="me-3"
                        href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
                        target="_blank"><img src="../../assets/img/technologies/bootstrap-5-logo.svg"
                            class="image image-xs"> </a><a class="me-3"
                        href="https://themesberg.com/product/dashboard/volt-react" target="_blank"><img
                            src="../../assets/img/technologies/react-logo.svg" class="image image-xs"> </a><a
                        href="https://themesberg.com/product/laravel/volt-admin-dashboard-template" target="_blank"><img
                            src="../../assets/img/technologies/laravel-logo.svg" class="image image-xs"></a></div>
            </div>
        </div>
        <div class="card theme-settings bg-gray-800 theme-settings-expand show" id="theme-settings-expand">
            <div class="card-body bg-gray-800 text-white rounded-top p-3 py-2"><span
                    class="fw-bold d-inline-flex align-items-center h6"><svg class="icon icon-xs me-2"
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"></path>
                    </svg> Settings</span></div>
        </div>
    </section>

</template>

<script setup>

</script>

 