$(function() {
    function t(t, e, a, n, r, i, s, l) {
        function o() { A.attr("transform", null).transition().duration(i).ease("linear").attr("transform", "translate(" + m(0) + ",0)"), "area" == e ? A.attr("d", v).attr("class", "d3-area").style("fill", l) : A.attr("d", y).attr("class", "d3-line d3-line-medium").style("stroke", l) }

        function d() { p = c.node().getBoundingClientRect().width - u.left - u.right, x.attr("width", p + u.left + u.right), b.attr("width", p + u.left + u.right), m.range([0, p]), k.attr("width", p), b.select(".d3-line").attr("d", y), b.select(".d3-area").attr("d", v) } for (var c = d3.select(t), u = { top: 0, right: 0, bottom: 0, left: 0 }, p = c.node().getBoundingClientRect().width - u.left - u.right, n = n - u.top - u.bottom, f = [], h = 0; h < a; h++) f.push(Math.floor(Math.random() * a) + 5); var m = d3.scale.linear().range([0, p]),
            g = d3.scale.linear().range([n - 5, 5]);
        m.domain([1, a - 3]), g.domain([0, a]); var y = d3.svg.line().interpolate(r).x(function(t, e) { return m(e) }).y(function(t, e) { return g(t) }),
            v = d3.svg.area().interpolate(r).x(function(t, e) { return m(e) }).y0(n).y1(function(t) { return g(t) }),
            x = c.append("svg"),
            b = x.attr("width", p + u.left + u.right).attr("height", n + u.top + u.bottom).append("g").attr("transform", "translate(" + u.left + "," + u.top + ")"),
            w = b.append("defs").append("clipPath").attr("id", function(e, a) { return "load-clip-" + t.substring(1) }),
            k = w.append("rect").attr("class", "load-clip").attr("width", 0).attr("height", n);
        k.transition().duration(1e3).ease("linear").attr("width", p); var A = b.append("g").attr("clip-path", function(e, a) { return "url(#load-clip-" + t.substring(1) + ")" }).append("path").datum(f).attr("transform", "translate(" + m(0) + ",0)"); "area" == e ? A.attr("d", v).attr("class", "d3-area").style("fill", l) : A.attr("d", y).attr("class", "d3-line d3-line-medium").style("stroke", l), A.style("opacity", 0).transition().duration(750).style("opacity", 1), setInterval(function() { f.push(Math.floor(Math.random() * a) + 5), f.shift(), o() }, s), $(window).on("resize", d), $(document).on("click", ".sidebar-control", d) }

    function e(t, e, a, n) {
        function r() { var t = d3.interpolate(0, o); return function(e) { var a = o / (100 / e),
                    n = d.endAngle(l * a); return d(t(n)) } } var i = d3.select(t),
            s = Math.min(e / 2, a / 2) - 2,
            l = 2 * Math.PI,
            o = $(t).data("progress"),
            d = d3.svg.arc().startAngle(0).innerRadius(0).outerRadius(s).endAngle(function(t) { return t.value / t.size * 2 * Math.PI }),
            c = i.append("svg"),
            u = c.attr("width", e).attr("height", a).append("g").attr("transform", "translate(" + e / 2 + "," + a / 2 + ")"),
            p = u.append("g").attr("class", "progress-meter");
        p.append("path").attr("d", d.endAngle(l)).style("fill", "#fff").style("stroke", n).style("stroke-width", 1.5), p.append("path").style("fill", n).transition().ease("cubic-out").duration(2500).attrTween("d", r) }

    function a(t, e, a, n, r, i, s, l, o) {
        function d() { f = p.node().getBoundingClientRect().width, g.attr("width", f), y.attr("width", f), h.rangeBands([0, f], .3), y.selectAll(".d3-random-bars").attr("width", h.rangeBand()).attr("x", function(t, e) { return h(e) }) } for (var c = [], u = 0; u < e; u++) c.push(Math.round(10 * Math.random()) + 10); var p = d3.select(t),
            f = p.node().getBoundingClientRect().width,
            h = d3.scale.ordinal().rangeBands([0, f], .3),
            m = d3.scale.linear().range([0, a]);
        h.domain(d3.range(0, c.length)), m.domain([0, d3.max(c)]); var g = p.append("svg"),
            y = g.attr("width", f).attr("height", a).append("g"),
            v = y.selectAll("rect").data(c).enter().append("rect").attr("class", "d3-random-bars").attr("width", h.rangeBand()).attr("x", function(t, e) { return h(e) }).style("fill", l),
            x = d3.tip().attr("class", "d3-tip").offset([-10, 0]); "hours" != o && "goal" != o && "members" != o || v.call(x).on("mouseover", x.show).on("mouseout", x.hide), "hours" == o && x.html(function(t, e) { return "<div class='text-center'><h6 class='no-margin'>" + t + "</h6><span class='text-size-small'>meetings</span><div class='text-size-small'>" + e + ":00</div></div>" }), "goal" == o && x.html(function(t, e) { return "<div class='text-center'><h6 class='no-margin'>" + t + "</h6><span class='text-size-small'>statements</span><div class='text-size-small'>" + e + ":00</div></div>" }), "members" == o && x.html(function(t, e) { return "<div class='text-center'><h6 class='no-margin'>" + t + "0</h6><span class='text-size-small'>members</span><div class='text-size-small'>" + e + ":00</div></div>" }), n ? function() { v.attr("height", 0).attr("y", a).transition().attr("height", function(t) { return m(t) }).attr("y", function(t) { return a - m(t) }).delay(function(t, e) { return e * s }).duration(i).ease(r) }() : function() { v.attr("height", function(t) { return m(t) }).attr("y", function(t) { return a - m(t) }) }(), $(window).on("resize", d), $(document).on("click", ".sidebar-control", d) }

    function n(t, e, a, n, r, i, s, l) {
        function o(t) { x.attr("d", v.endAngle(u * t)), b.attr("d", v.endAngle(u * t)), w.text(p(t)) } var d = d3.select(t),
            c = r,
            u = 2 * Math.PI,
            p = d3.format(".0%"),
            f = 2 * e,
            h = Math.abs((c - 0) / .01),
            m = c < 0 ? -.01 : .01,
            g = d.append("svg"),
            y = g.attr("width", f).attr("height", f).append("g").attr("transform", "translate(" + f / 2 + "," + f / 2 + ")"),
            v = d3.svg.arc().startAngle(0).innerRadius(e).outerRadius(e - a);
        y.append("path").attr("class", "d3-progress-background").attr("d", v.endAngle(u)).style("fill", "#eee"); var x = y.append("path").attr("class", "d3-progress-foreground").attr("filter", "url(#blur)").style("fill", n).style("stroke", n),
            b = y.append("path").attr("class", "d3-progress-front").style("fill", n).style("fill-opacity", 1),
            w = d3.select(t).append("h2").attr("class", "mt-15 mb-5");
        d3.select(t).append("i").attr("class", i + " counter-icon").attr("style", "top: " + (f - 32) / 2 + "px"), d3.select(t).append("div").text(s), d3.select(t).append("div").attr("class", "text-size-small text-muted").text(l); var k = 0;! function t() { o(k), h > 0 && (h--, k += m, setTimeout(t, 10)) }() }
    Array.prototype.slice.call(document.querySelectorAll(".switch")).forEach(function(t) { new Switchery(t, { color: "#4CAF50" }) }), $(".daterange-ranges").daterangepicker({ startDate: moment().subtract(29, "days"), endDate: moment(), minDate: "01/01/2012", maxDate: "12/31/2016", dateLimit: { days: 60 }, ranges: { Today: [moment(), moment()], Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")], "Last 7 Days": [moment().subtract(6, "days"), moment()], "Last 30 Days": [moment().subtract(29, "days"), moment()], "This Month": [moment().startOf("month"), moment().endOf("month")], "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")] }, opens: "left", applyClass: "btn-small bg-slate-600 btn-block", cancelClass: "btn-small btn-default btn-block", format: "MM/DD/YYYY" }, function(t, e) { $(".daterange-ranges span").html(t.format("MMMM D") + " - " + e.format("MMMM D")) }), $(".daterange-ranges span").html(moment().subtract(29, "days").format("MMMM D") + " - " + moment().format("MMMM D")),
        function(t, e) {
            function a() { i = n.node().getBoundingClientRect().width - r.left - r.right, y.attr("width", i + r.left + r.right), v.attr("width", i + r.left + r.right), c.range([0, i]), v.selectAll(".d3-axis-horizontal").call(f), v.selectAll(".d3-axis-subticks").attr("x1", c).attr("x2", c), v.selectAll(".d3-grid-dashed").call(g.tickSize(-i, 0, 0)), v.selectAll(".d3-axis-right").attr("transform", "translate(" + i + ", 0)"), v.selectAll(".streamgraph-layer").attr("d", function(t) { return w(t.values) }) } var n = d3.select(t),
                r = { top: 5, right: 50, bottom: 40, left: 50 },
                i = n.node().getBoundingClientRect().width - r.left - r.right,
                e = e - r.top - r.bottom,
                s = n.append("div").attr("class", "d3-tip e").style("display", "none"),
                l = d3.time.format("%m/%d/%y %H:%M"),
                o = d3.time.format("%H:%M"),
                d = ["#03A9F4", "#29B6F6", "#4FC3F7", "#81D4FA", "#B3E5FC", "#E1F5FE"],
                c = d3.time.scale().range([0, i]),
                u = d3.scale.linear().range([e, 0]),
                p = d3.scale.ordinal().range(d),
                f = d3.svg.axis().scale(c).orient("bottom").ticks(d3.time.hours, 4).innerTickSize(4).tickPadding(8).tickFormat(d3.time.format("%H:%M")),
                h = d3.svg.axis().scale(u).ticks(6).innerTickSize(4).outerTickSize(0).tickPadding(8).tickFormat(function(t) { return t / 1e3 + "k" }),
                m = h,
                g = d3.svg.axis().scale(u).orient("left").ticks(6).tickPadding(8).tickFormat("").tickSize(-i, 0, 0),
                y = n.append("svg"),
                v = y.attr("width", i + r.left + r.right).attr("height", e + r.top + r.bottom).append("g").attr("transform", "translate(" + r.left + "," + r.top + ")"),
                x = d3.layout.stack().offset("silhouette").values(function(t) { return t.values }).x(function(t) { return t.date }).y(function(t) { return t.value }),
                b = d3.nest().key(function(t) { return t.key }),
                w = d3.svg.area().interpolate("cardinal").x(function(t) { return c(t.date) }).y0(function(t) { return u(t.y0) }).y1(function(t) { return u(t.y0 + t.y) });
            d3.csv("assets/demo_data/dashboard/traffic_sources.csv", function(a, d) { d.forEach(function(t) { t.date = l.parse(t.date), t.value = +t.value }); var y = x(b.entries(d));
                c.domain(d3.extent(d, function(t, e) { return t.date })), u.domain([0, d3.max(d, function(t) { return t.y0 + t.y })]), v.append("g").attr("class", "d3-grid-dashed").call(g); var k = v.append("g").attr("class", "streamgraph-layers-group"),
                    A = k.selectAll(".streamgraph-layer").data(y).enter().append("path").attr("class", "streamgraph-layer").attr("d", function(t) { return w(t.values) }).style("stroke", "#fff").style("stroke-width", .5).style("fill", function(t, e) { return p(e) }),
                    z = A.style("opacity", 0).transition().duration(750).delay(function(t, e) { return 50 * e }).style("opacity", 1);
                v.append("g").attr("class", "d3-axis d3-axis-left d3-axis-solid").call(h.orient("left")), d3.select(v.selectAll(".d3-axis-left .tick text")[0][0]).style("visibility", "hidden"), v.append("g").attr("class", "d3-axis d3-axis-right d3-axis-solid").attr("transform", "translate(" + i + ", 0)").call(m.orient("right")), d3.select(v.selectAll(".d3-axis-right .tick text")[0][0]).style("visibility", "hidden"), v.append("g").attr("class", "d3-axis d3-axis-horizontal d3-axis-solid").attr("transform", "translate(0," + e + ")").call(f).selectAll(".d3-axis-subticks").data(c.ticks(d3.time.hours), function(t) { return t }).enter().append("line").attr("class", "d3-axis-subticks").attr("y1", 0).attr("y2", 4).attr("x1", c).attr("x2", c); var C = k.append("g").attr("class", "hover-line"),
                    M = C.append("line").attr("y1", 0).attr("y2", e).style("fill", "none").style("stroke", "#fff").style("stroke-width", 1).style("pointer-events", "none").style("shape-rendering", "crispEdges").style("opacity", 0),
                    B = C.append("rect").attr("x", 2).attr("y", 2).attr("width", 6).attr("height", 6).style("fill", "#03A9F4").style("stroke", "#fff").style("stroke-width", 1).style("shape-rendering", "crispEdges").style("pointer-events", "none").style("opacity", 0);
                z.each("end", function() { A.on("mouseover", function(t, e) { v.selectAll(".streamgraph-layer").transition().duration(250).style("opacity", function(t, a) { return a != e ? .75 : 1 }) }).on("mousemove", function(t, e) { mouse = d3.mouse(this), mousex = mouse[0], mousey = mouse[1], datearray = []; var a = c.invert(mousex);
                        a = a.getHours(); for (var n = t.values, r = 0; r < n.length; r++) datearray[r] = n[r].date, datearray[r] = datearray[r].getHours();
                        mousedate = datearray.indexOf(a), pro = t.values[mousedate].value, B.attr("x", mousex - 3).attr("y", mousey - 6).style("opacity", 1), M.attr("x1", mousex).attr("x2", mousex).style("opacity", 1), s.html("<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>" + t.key + "</div></li><li>Visits: &nbsp;<span class='text-semibold pull-right'>" + pro + "</span></li><li>Time: &nbsp; <span class='text-semibold pull-right'>" + o(t.values[mousedate].date) + "</span></li></ul>").style("display", "block"), s.append("div").attr("class", "d3-tip-arrow") }).on("mouseout", function(t, e) { v.selectAll(".streamgraph-layer").transition().duration(250).style("opacity", 1), B.style("opacity", 0), s.style("display", "none"), M.style("opacity", 0) }) }), n.on("mousemove", function(e, a) { mouse = d3.mouse(this), mousex = mouse[0], mousey = mouse[1], s.style("top", mousey - $(".d3-tip").outerHeight() / 2 - 2 + "px"), mousex >= $(t).outerWidth() - $(".d3-tip").outerWidth() - r.right - 60 ? s.style("left", mousex - $(".d3-tip").outerWidth() - 30 + "px").attr("class", "d3-tip w") : s.style("left", mousex + 30 + "px").attr("class", "d3-tip e") }) }), $(window).on("resize", a), $(document).on("click", ".sidebar-control", a) }("#traffic-sources", 330),
        function(t, e) {
            function a() { d3.transition().duration(h ? 7500 : 500).each(n) }

            function n() {
                function t() { s = r.node().getBoundingClientRect().width - i.left - i.right, u.attr("width", s + i.left + i.right), p.attr("width", s + i.left + i.right), g.range([0, s]), y.range([e, 0]), p.select(".d3-axis-horizontal").call(v), p.select(".d3-axis-vertical").call(x.tickSize(0 - s)), p.selectAll(".d3-line").attr("d", function(t, e) { return m(t.values) }), p.selectAll(".d3-line-circle").attr("cx", function(t, e) { return g(t.date) }) } var a = d3.nest().key(function(t) { return t.type }).map(formatted),
                    n = f.val(),
                    d = a[n];
                c.domain(d3.keys(d[0]).filter(function(t) { return "date" !== t && "type" !== t })); var h = c.domain().map(function(t) { return { name: t, values: d.map(function(e) { return { name: t, date: o(e.date), value: parseFloat(e[t], 10) } }) } }),
                    m = d3.svg.line().x(function(t) { return g(t.date) }).y(function(t) { return y(t.value) }).interpolate("cardinal"),
                    g = d3.time.scale().domain([d3.min(h, function(t) { return d3.min(t.values, function(t) { return t.date }) }), d3.max(h, function(t) { return d3.max(t.values, function(t) { return t.date }) })]).range([0, s]),
                    y = d3.scale.linear().domain([d3.min(h, function(t) { return d3.min(t.values, function(t) { return t.value }) }), d3.max(h, function(t) { return d3.max(t.values, function(t) { return t.value }) })]).range([e, 0]),
                    v = d3.svg.axis().scale(g).orient("bottom").tickPadding(8).ticks(d3.time.days).innerTickSize(4).tickFormat(d3.time.format("%a")),
                    x = d3.svg.axis().scale(y).orient("left").ticks(6).tickSize(0 - s).tickPadding(8);
                p.append("g").attr("class", "d3-axis d3-axis-horizontal d3-axis-solid").attr("transform", "translate(0," + e + ")"), p.append("g").attr("class", "d3-axis d3-axis-vertical d3-axis-transparent"); var b = p.selectAll(".lines").data(h);
                b.enter().append("g").attr("class", "lines").attr("id", function(t) { return t.name + "-line" }).append("path").attr("class", "d3-line d3-line-medium").style("stroke", function(t) { return c(t.name) }).style("opacity", 0).attr("d", function(t) { return m(t.values[0]) }).transition().duration(500).delay(function(t, e) { return 200 * e }).style("opacity", 1); var w = b.selectAll("circle").data(function(t) { return t.values }).enter().append("circle").attr("class", "d3-line-circle d3-line-circle-medium").attr("cx", function(t, e) { return g(t.date) }).attr("cy", function(t, e) { return y(t.value) }).attr("r", 3).style("fill", "#fff").style("stroke", function(t) { return c(t.name) });
                w.style("opacity", 0).transition().duration(500).delay(500).style("opacity", 1), w.on("mouseover", function(t) { l.offset([-15, 0]).show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { l.hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), b.each(function(t) { d3.select(d3.select(this).selectAll("circle")[0][0]).on("mouseover", function(t) { l.offset([0, 15]).direction("e").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { l.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }) }), b.each(function(t) { d3.select(d3.select(this).selectAll("circle")[0][d3.select(this).selectAll("circle").size() - 1]).on("mouseover", function(t) { l.offset([0, -15]).direction("w").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { l.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }) }); var k = d3.transition(b);
                k.select("path").attr("d", function(t, e) { return m(t.values) }), k.selectAll("circle").attr("cy", function(t, e) { return y(t.value) }).attr("cx", function(t, e) { return g(t.date) }), d3.transition(p).select(".d3-axis-vertical").call(x), d3.transition(p).select(".d3-axis-horizontal").attr("transform", "translate(0," + e + ")").call(v), $(window).on("resize", t), $(document).on("click", ".sidebar-control", t) } var r = d3.select(t),
                i = { top: 5, right: 30, bottom: 30, left: 50 },
                s = r.node().getBoundingClientRect().width - i.left - i.right,
                e = e - i.top - i.bottom,
                l = d3.tip().attr("class", "d3-tip").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>" + t.name + " app</div></li><li>Sales: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Revenue: &nbsp; <span class='text-semibold pull-right'>$" + (25 * t.value).toFixed(2) + "</span></li></ul>" }),
                o = d3.time.format("%Y/%m/%d").parse,
                d = (d3.time.format("%b %d, '%y"), ["#4CAF50", "#FF5722", "#5C6BC0"]),
                c = d3.scale.ordinal().range(d),
                u = r.append("svg"),
                p = u.attr("width", s + i.left + i.right).attr("height", e + i.top + i.bottom).append("g").attr("transform", "translate(" + i.left + "," + i.top + ")").call(l),
                f = $("#select_date").multiselect({ buttonClass: "btn btn-link text-semibold", enableHTML: !0, dropRight: !0, onChange: function() { a(), $.uniform.update() }, buttonText: function(t, e) { var a = ""; return t.each(function() { a += $(this).html() + ", " }), '<span class="status-mark border-warning position-left"></span>' + a.substr(0, a.length - 2) } });
            $(".multiselect-container input").uniform({ radioClass: "choice" }), d3.csv("assets/demo_data/dashboard/app_sales.csv", function(t, e) { formatted = e, n() }); var h;
            d3.select(window).on("keydown", function() { h = d3.event.altKey }).on("keyup", function() { h = !1 }) }("#app_sales", 255),
        function() { d3.csv("assets/demo_data/dashboard/app_sales_heatmap.csv", function(t, e) {
                function a() { width = l.node().getBoundingClientRect().width - margin.left - margin.right, gridSize = width / new Date(e[e.length - 1].date).getHours(), height = (rowGap + gridSize) * d3.max(r, function(t, e) { return e + 1 }) - margin.top, u.attr("width", width + margin.left + margin.right).attr("height", height + margin.bottom), p.attr("width", width + margin.left + margin.right).attr("height", height + margin.bottom), o.range([0, width]), p.selectAll(".hour-group").attr("transform", function(t, e) { return "translate(0, " + (gridSize + rowGap) * e + ")" }), p.selectAll(".heatmap-hour").attr("width", gridSize).attr("height", gridSize).attr("x", function(t, e) { return o(t.date) }), p.selectAll(".legend-group").attr("transform", "translate(" + (width / 2 - buckets * gridSize / 2) + "," + (height + margin.bottom - margin.top) + ")"), p.selectAll(".sales-count").attr("x", width), p.selectAll(".heatmap-legend-item").attr("width", gridSize).attr("x", function(t, e) { return gridSize * e }), p.selectAll(".max-legend-value").attr("x", buckets * gridSize + 10) } var n = d3.nest().key(function(t) { return t.app }),
                    r = n.entries(e),
                    i = d3.time.format("%Y/%m/%d %H:%M"),
                    s = d3.time.format("%H:%M");
                e.forEach(function(t, e) { t.date = i.parse(t.date), t.value = +t.value }); var l = d3.select("#sales-heatmap");
                margin = { top: 20, right: 0, bottom: 30, left: 0 }, width = l.node().getBoundingClientRect().width - margin.left - margin.right, gridSize = width / new Date(e[e.length - 1].date).getHours(), rowGap = 40, height = (rowGap + gridSize) * d3.max(r, function(t, e) { return e + 1 }) - margin.top, buckets = 5, colors = ["#DCEDC8", "#C5E1A5", "#9CCC65", "#7CB342", "#558B2F"]; var o = d3.time.scale().range([0, width]),
                    d = d3.scale.linear().range([height, 0]),
                    c = d3.scale.quantile().domain([0, buckets - 1, d3.max(e, function(t) { return t.value })]).range(colors);
                o.domain([new Date(e[0].date), d3.time.hour.offset(new Date(e[e.length - 1].date), 1)]), d.domain([0, d3.max(e, function(t) { return t.app })]); var u = l.append("svg"),
                    p = u.attr("width", width + margin.left + margin.right).attr("height", height + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
                    f = p.selectAll(".hour-group").data(r).enter().append("g").attr("class", "hour-group").attr("transform", function(t, e) { return "translate(0, " + (gridSize + rowGap) * e + ")" });
                f.append("text").attr("class", "app-label").attr("x", 0).attr("y", -(margin.top / 2)).text(function(t, e) { return t.key }), f.append("text").attr("class", "sales-count").attr("x", width).attr("y", -(margin.top / 2)).style("text-anchor", "end").text(function(t, e) { return d3.sum(t.values, function(t) { return t.value }) + " sales today" }); var h = f.selectAll(".heatmap-hour").data(function(t) { return t.values }).enter().append("rect").attr("x", function(t, e) { return o(t.date) }).attr("y", 0).attr("class", "heatmap-hour").attr("width", gridSize).attr("height", gridSize).style("fill", "#fff").style("stroke", "#fff").style("cursor", "pointer").style("shape-rendering", "crispEdges");
                h.transition().duration(250).delay(function(t, e) { return 20 * e }).style("fill", function(t) { return c(t.value) }), f.each(function(t) { h.on("mouseover", function(t, e) { d3.select(this).style("opacity", .75), d3.select(this.parentNode).select(".sales-count").text(function(t) { return t.values[e].value + " sales at " + s(t.values[e].date) }) }).on("mouseout", function(t, e) { d3.select(this).style("opacity", 1), d3.select(this.parentNode).select(".sales-count").text(function(t, e) { return d3.sum(t.values, function(t) { return t.value }) + " sales today" }) }) }); var m, g;
                e.forEach(function(t, a) { g = d3.max(e, function(t) { return t.value }), m = d3.min(e, function(t) { return t.value }) }); var y = p.append("g").attr("class", "legend-group").attr("width", width).attr("transform", "translate(" + (width / 2 - buckets * gridSize / 2) + "," + (height + (margin.bottom - margin.top)) + ")");
                y.selectAll(".heatmap-legend").data([0].concat(c.quantiles()), function(t) { return t }).enter().append("g").attr("class", "heatmap-legend").append("rect").attr("class", "heatmap-legend-item").attr("x", function(t, e) { return gridSize * e }).attr("y", -8).attr("width", gridSize).attr("height", 5).style("stroke", "#fff").style("shape-rendering", "crispEdges").style("fill", function(t, e) { return colors[e] }), y.append("text").attr("class", "min-legend-value").attr("x", -10).attr("y", -2).style("text-anchor", "end").style("font-size", 11).style("fill", "#999").text(m), y.append("text").attr("class", "max-legend-value").attr("x", buckets * gridSize + 10).attr("y", -2).style("font-size", 11).style("fill", "#999").text(g), $(window).on("resize", a), $(document).on("click", ".sidebar-control", a) }) }(),
        function(t, e, a) { var n = d3.select(t),
                r = { top: 20, right: 35, bottom: 40, left: 35 },
                i = n.node().getBoundingClientRect().width - r.left - r.right,
                e = e - r.top - r.bottom,
                s = d3.time.format("%Y-%m-%d").parse,
                l = d3.bisector(function(t) { return t.date }).left,
                o = d3.time.format("%b %d"),
                d = n.append("svg"),
                c = d.attr("width", i + r.left + r.right).attr("height", e + r.top + r.bottom).append("g").attr("transform", "translate(" + r.left + "," + r.top + ")"),
                u = d3.svg.area().x(function(t) { return p(t.date) }).y0(e).y1(function(t) { return f(t.value) }).interpolate("monotone"),
                p = d3.time.scale().range([0, i]),
                f = d3.scale.linear().range([e, 0]),
                h = d3.svg.axis().scale(p).orient("bottom").ticks(d3.time.days, 6).innerTickSize(4).tickPadding(8).tickFormat(d3.time.format("%b %d"));
            d3.json("assets/demo_data/dashboard/monthly_sales.json", function(t, m) {
                function g() { var t = d3.mouse(this),
                        a = t[0],
                        i = (t[1], p.invert(a)),
                        s = l(m, i),
                        d = m[s - 1],
                        c = m[s],
                        u = i - d.date > c.date - i ? c : d;
                    b.attr("transform", "translate(" + p(u.date) + "," + e + ")"), w.attr("transform", "translate(" + p(u.date) + "," + f(u.value) + ")"), a >= n.node().getBoundingClientRect().width - k.select("text").node().getBoundingClientRect().width - r.right - r.left ? k.select("text").attr("text-anchor", "end").attr("x", function() { return p(u.date) - 15 + "px" }).text(o(u.date) + " - " + u.value + " sales") : k.select("text").attr("text-anchor", "start").attr("x", function() { return p(u.date) + 15 + "px" }).text(o(u.date) + " - " + u.value + " sales") }

                function y() { i = n.node().getBoundingClientRect().width - r.left - r.right, d.attr("width", i + r.left + r.right), c.attr("width", i + r.left + r.right), p.range([0, i]), c.selectAll(".d3-axis-horizontal").call(h), c.selectAll(".d3-axis-subticks").attr("x1", p).attr("x2", p), c.selectAll(".d3-area").datum(m).attr("d", u), c.selectAll(".d3-crosshair-overlay").attr("width", i) } if (t) return console.error(t);
                m.forEach(function(t) { t.date = s(t.date), t.value = +t.value }); var v = d3.max(m, function(t) { return t.value }),
                    x = m.map(function(t) { return { date: t.date, value: 0 } });
                p.domain(d3.extent(m, function(t, e) { return t.date })), f.domain([0, d3.max(m, function(t) { return t.value })]), c.append("g").attr("class", "d3-axis d3-axis-horizontal d3-axis-solid").attr("transform", "translate(0," + e + ")").call(h).selectAll(".d3-axis-subticks").data(p.ticks(d3.time.days), function(t) { return t }).enter().append("line").attr("class", "d3-axis-subticks").attr("y1", 0).attr("y2", 4).attr("x1", p).attr("x2", p), c.append("path").datum(m).attr("class", "d3-area").attr("d", u).style("fill", a).transition().duration(1e3).attrTween("d", function() { var t = d3.interpolateArray(x, m); return function(e) { return u(t(e)) } }); var b = c.append("g").attr("class", "d3-crosshair-line").style("display", "none");
                b.append("line").attr("class", "vertical-crosshair").attr("y1", 0).attr("y2", -v).style("stroke", "#e5e5e5").style("shape-rendering", "crispEdges"); var w = c.append("g").attr("class", "d3-crosshair-pointer").style("display", "none");
                w.append("circle").attr("r", 3).style("fill", "#fff").style("stroke", a).style("stroke-width", 1); var k = c.append("g").attr("class", "d3-crosshair-text").style("display", "none");
                k.append("text").attr("dy", -10).style("font-size", 12), c.append("rect").attr("class", "d3-crosshair-overlay").style("fill", "none").style("pointer-events", "all").attr("width", i).attr("height", e).on("mouseover", function() { w.style("display", null), b.style("display", null), k.style("display", null) }).on("mouseout", function() { w.style("display", "none"), b.style("display", "none"), k.style("display", "none") }).on("mousemove", g), $(window).on("resize", y), $(document).on("click", ".sidebar-control", y) }) }("#monthly-sales-stats", 100, "#4DB6AC"),
        function(t, e, a) { var n = d3.select(t),
                r = { top: 0, right: 0, bottom: 0, left: 0 },
                i = n.node().getBoundingClientRect().width - r.left - r.right,
                e = e - r.top - r.bottom,
                s = d3.time.format("%Y-%m-%d").parse,
                l = n.append("svg"),
                o = l.attr("width", i + r.left + r.right).attr("height", e + r.top + r.bottom).append("g").attr("transform", "translate(" + r.left + "," + r.top + ")"),
                d = d3.svg.area().x(function(t) { return c(t.date) }).y0(e).y1(function(t) { return u(t.value) }).interpolate("monotone"),
                c = d3.time.scale().range([0, i]),
                u = d3.scale.linear().range([e, 0]);
            d3.json("assets/demo_data/dashboard/monthly_sales.json", function(t, e) {
                function p() { i = n.node().getBoundingClientRect().width - r.left - r.right, l.attr("width", i + r.left + r.right), o.attr("width", i + r.left + r.right), c.range([0, i]), o.selectAll(".d3-area").datum(e).attr("d", d) } if (t) return console.error(t);
                e.forEach(function(t) { t.date = s(t.date), t.value = +t.value }); var f = (d3.max(e, function(t) { return t.value }), e.map(function(t) { return { date: t.date, value: 0 } }));
                c.domain(d3.extent(e, function(t, e) { return t.date })), u.domain([0, d3.max(e, function(t) { return t.value })]), o.append("path").datum(e).attr("class", "d3-area").style("fill", a).attr("d", d).transition().duration(1e3).attrTween("d", function() { var t = d3.interpolateArray(f, e); return function(e) { return d(t(e)) } }), $(window).on("resize", p), $(document).on("click", ".sidebar-control", p) }) }("#messages-stats", 40, "#5C6BC0"), t("#new-visitors", "line", 30, 35, "basis", 750, 2e3, "#26A69A"), t("#new-sessions", "line", 30, 35, "basis", 750, 2e3, "#FF7043"), t("#total-online", "line", 30, 35, "basis", 750, 2e3, "#5C6BC0"), t("#server-load", "area", 30, 50, "basis", 750, 2e3, "rgba(255,255,255,0.5)"),
        function(t, e) {
            function a() { s = r.node().getBoundingClientRect().width - i.left - i.right, u.attr("width", s + i.left + i.right), p.attr("width", s + i.left + i.right), f.range([l, s - l]), y.attr("width", s), p.selectAll(".d3-line").attr("d", m(n)), p.selectAll(".d3-line-circle").attr("cx", m.x()), p.selectAll(".d3-line-guides").attr("x1", function(t, e) { return f(t.date) }).attr("x2", function(t, e) { return f(t.date) }) } var n = [{ date: "04/13/14", alpha: "60" }, { date: "04/14/14", alpha: "35" }, { date: "04/15/14", alpha: "65" }, { date: "04/16/14", alpha: "50" }, { date: "04/17/14", alpha: "65" }, { date: "04/18/14", alpha: "20" }, { date: "04/19/14", alpha: "60" }],
                r = d3.select(t),
                i = { top: 0, right: 0, bottom: 0, left: 0 },
                s = r.node().getBoundingClientRect().width - i.left - i.right,
                e = e - i.top - i.bottom,
                l = 20,
                o = d3.time.format("%m/%d/%y").parse,
                d = d3.time.format("%a, %B %e"),
                c = d3.tip().attr("class", "d3-tip").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-check2 position-left'></i>" + d(t.date) + "</div></li><li>Sales: &nbsp;<span class='text-semibold pull-right'>" + t.alpha + "</span></li><li>Revenue: &nbsp; <span class='text-semibold pull-right'>$" + (25 * t.alpha).toFixed(2) + "</span></li></ul>" }),
                u = r.append("svg"),
                p = u.attr("width", s + i.left + i.right).attr("height", e + i.top + i.bottom).append("g").attr("transform", "translate(" + i.left + "," + i.top + ")").call(c);
            n.forEach(function(t) { t.date = o(t.date), t.alpha = +t.alpha }); var f = d3.time.scale().range([l, s - l]),
                h = d3.scale.linear().range([e, 5]);
            f.domain(d3.extent(n, function(t) { return t.date })), h.domain([0, d3.max(n, function(t) { return Math.max(t.alpha) })]); var m = d3.svg.line().x(function(t) { return f(t.date) }).y(function(t) { return h(t.alpha) }),
                g = p.append("defs").append("clipPath").attr("id", "clip-line-small"),
                y = g.append("rect").attr("class", "clip").attr("width", 0).attr("height", e);
            y.transition().duration(1e3).ease("linear").attr("width", s), p.append("path").attr({ d: m(n), "clip-path": "url(#clip-line-small)", class: "d3-line d3-line-medium" }).style("stroke", "#fff"), p.select(".line-tickets").transition().duration(1e3).ease("linear"); var v = p.append("g").selectAll(".d3-line-guides-group").data(n);
            v.enter().append("line").attr("class", "d3-line-guides").attr("x1", function(t, e) { return f(t.date) }).attr("y1", function(t, a) { return e }).attr("x2", function(t, e) { return f(t.date) }).attr("y2", function(t, a) { return e }).style("stroke", "rgba(255,255,255,0.3)").style("stroke-dasharray", "4,2").style("shape-rendering", "crispEdges"), v.transition().duration(1e3).delay(function(t, e) { return 150 * e }).attr("y2", function(t, e) { return h(t.alpha) }); var x = p.insert("g").selectAll(".d3-line-circle").data(n).enter().append("circle").attr("class", "d3-line-circle d3-line-circle-medium").attr("cx", m.x()).attr("cy", m.y()).attr("r", 3).style("stroke", "#fff").style("fill", "#29B6F6");
            x.style("opacity", 0).transition().duration(250).ease("linear").delay(1e3).style("opacity", 1), x.on("mouseover", function(t) { c.offset([-10, 0]).show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { c.hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), d3.select(x[0][0]).on("mouseover", function(t) { c.offset([0, 10]).direction("e").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { c.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), d3.select(x[0][x.size() - 1]).on("mouseover", function(t) { c.offset([0, -10]).direction("w").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { c.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), $(window).on("resize", a), $(document).on("click", ".sidebar-control", a) }("#today-revenue", 50), e("#today-progress", 20, 20, "#7986CB"), e("#yesterday-progress", 20, 20, "#7986CB"),
        function(t, e) { var a = [{ browser: "Google Adwords", icon: "<i class='icon-google position-left'></i>", value: 1047, color: "#66BB6A" }, { browser: "Social media", icon: "<i class='icon-share4 position-left'></i>", value: 2948, color: "#9575CD" }, { browser: "Youtube video", icon: "<i class='icon-youtube position-left'></i>", value: 3909, color: "#FF7043" }],
                n = d3.select(t),
                r = e / 2 - 2,
                i = d3.sum(a, function(t) { return t.value }),
                s = d3.tip().attr("class", "d3-tip").offset([-10, 0]).direction("e").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>" + t.data.icon + t.data.browser + "</div></li><li>Visits: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>" + (100 / (i / t.value)).toFixed(2) + "%</span></li></ul>" }),
                l = n.append("svg").call(s),
                o = l.attr("width", e).attr("height", e).append("g").attr("transform", "translate(" + e / 2 + "," + e / 2 + ")"),
                d = d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3 * Math.PI).value(function(t) { return t.value }),
                c = d3.svg.arc().outerRadius(r).innerRadius(r / 2),
                u = o.selectAll(".d3-arc").data(d(a)).enter().append("g").attr("class", "d3-arc").style("stroke", "#fff").style("cursor", "pointer"),
                p = u.append("path").style("fill", function(t) { return t.data.color });
            p.on("mouseover", function(t, e) { d3.select(this).transition().duration(500).ease("elastic").attr("transform", function(t) { return t.midAngle = (t.endAngle - t.startAngle) / 2 + t.startAngle, "translate(" + 2 * Math.sin(t.midAngle) + "," + 2 * -Math.cos(t.midAngle) + ")" }) }).on("mousemove", function(t) { s.show(t).style("top", d3.event.pageY - 40 + "px").style("left", d3.event.pageX + 30 + "px") }).on("mouseout", function(t, e) { d3.select(this).transition().duration(500).ease("bounce").attr("transform", "translate(0,0)"), s.hide(t) }), p.transition().delay(function(t, e) { return 500 * e }).duration(500).attrTween("d", function(t) { var e = d3.interpolate(t.startAngle, t.endAngle); return function(a) { return t.endAngle = e(a), c(t) } }) }("#campaigns-donut", 42),
        function(t, e) { var a = [{ status: "Active campaigns", icon: "<span class='status-mark border-blue-300 position-left'></span>", value: 439, color: "#29B6F6" }, { status: "Closed campaigns", icon: "<span class='status-mark border-danger-300 position-left'></span>", value: 290, color: "#EF5350" }, { status: "Pending campaigns", icon: "<span class='status-mark border-success-300 position-left'></span>", value: 190, color: "#81C784" }, { status: "Campaigns on hold", icon: "<span class='status-mark border-grey-300 position-left'></span>", value: 148, color: "#999" }],
                n = d3.select(t),
                r = e / 2 - 2,
                i = d3.sum(a, function(t) { return t.value }),
                s = d3.tip().attr("class", "d3-tip").offset([-10, 0]).direction("e").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>" + t.data.icon + t.data.status + "</div></li><li>Total: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>" + (100 / (i / t.value)).toFixed(2) + "%</span></li></ul>" }),
                l = n.append("svg").call(s),
                o = l.attr("width", e).attr("height", e).append("g").attr("transform", "translate(" + e / 2 + "," + e / 2 + ")"),
                d = d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3 * Math.PI).value(function(t) { return t.value }),
                c = d3.svg.arc().outerRadius(r).innerRadius(r / 2),
                u = o.selectAll(".d3-arc").data(d(a)).enter().append("g").attr("class", "d3-arc").style("stroke", "#fff").style("cursor", "pointer"),
                p = u.append("path").style("fill", function(t) { return t.data.color });
            p.on("mouseover", function(t, e) { d3.select(this).transition().duration(500).ease("elastic").attr("transform", function(t) { return t.midAngle = (t.endAngle - t.startAngle) / 2 + t.startAngle, "translate(" + 2 * Math.sin(t.midAngle) + "," + 2 * -Math.cos(t.midAngle) + ")" }) }).on("mousemove", function(t) { s.show(t).style("top", d3.event.pageY - 40 + "px").style("left", d3.event.pageX + 30 + "px") }).on("mouseout", function(t, e) { d3.select(this).transition().duration(500).ease("bounce").attr("transform", "translate(0,0)"), s.hide(t) }), p.transition().delay(function(t, e) { return 500 * e }).duration(500).attrTween("d", function(t) { var e = d3.interpolate(t.startAngle, t.endAngle); return function(a) { return t.endAngle = e(a), c(t) } }) }("#campaign-status-pie", 42),
        function(t, e) { var a = [{ status: "Pending tickets", icon: "<i class='status-mark border-blue-300 position-left'></i>", value: 295, color: "#29B6F6" }, { status: "Resolved tickets", icon: "<i class='status-mark border-success-300 position-left'></i>", value: 189, color: "#66BB6A" }, { status: "Closed tickets", icon: "<i class='status-mark border-danger-300 position-left'></i>", value: 277, color: "#EF5350" }],
                n = d3.select(t),
                r = e / 2 - 2,
                i = d3.sum(a, function(t) { return t.value }),
                s = d3.tip().attr("class", "d3-tip").offset([-10, 0]).direction("e").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>" + t.data.icon + t.data.status + "</div></li><li>Total: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>" + (100 / (i / t.value)).toFixed(2) + "%</span></li></ul>" }),
                l = n.append("svg").call(s),
                o = l.attr("width", e).attr("height", e).append("g").attr("transform", "translate(" + e / 2 + "," + e / 2 + ")"),
                d = d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3 * Math.PI).value(function(t) { return t.value }),
                c = d3.svg.arc().outerRadius(r).innerRadius(r / 2),
                u = o.selectAll(".d3-arc").data(d(a)).enter().append("g").attr("class", "d3-arc").style("stroke", "#fff").style("cursor", "pointer"),
                p = u.append("path").style("fill", function(t) { return t.data.color });
            p.on("mouseover", function(t, e) { d3.select(this).transition().duration(500).ease("elastic").attr("transform", function(t) { return t.midAngle = (t.endAngle - t.startAngle) / 2 + t.startAngle, "translate(" + 2 * Math.sin(t.midAngle) + "," + 2 * -Math.cos(t.midAngle) + ")" }) }).on("mousemove", function(t) { s.show(t).style("top", d3.event.pageY - 40 + "px").style("left", d3.event.pageX + 30 + "px") }).on("mouseout", function(t, e) { d3.select(this).transition().duration(500).ease("bounce").attr("transform", "translate(0,0)"), s.hide(t) }), p.transition().delay(function(t, e) { return 500 * e }).duration(500).attrTween("d", function(t) { var e = d3.interpolate(t.startAngle, t.endAngle); return function(a) { return t.endAngle = e(a), c(t) } }) }("#tickets-status", 42), a("#hours-available-bars", 24, 40, !0, "elastic", 1200, 50, "#EC407A", "hours"), a("#goal-bars", 24, 40, !0, "elastic", 1200, 50, "#5C6BC0", "goal"), a("#members-online", 24, 50, !0, "elastic", 1200, 50, "rgba(255,255,255,0.5)", "members"), n("#hours-available-progress", 38, 2, "#F06292", .68, "icon-watch text-pink-400", "Hours available", "64% average"), n("#goal-progress", 38, 2, "#5C6BC0", .82, "icon-trophy3 text-indigo-400", "Productivity goal", "87% average"),
        function(t, e) {
            function a(t) { return t.randomizer || (t.randomizer = n(t)), t.ranges = t.ranges.map(t.randomizer), t.markers = t.markers.map(t.randomizer), t.measures = t.measures.map(t.randomizer), t }

            function n(t) { var e = .2 * d3.max(t.ranges); return function(t) { return Math.max(0, t + e * (Math.random() - .5)) } }! function() {
                function t(t) { return t.ranges }

                function e(t) { return t.markers }

                function a(t) { return t.measures }

                function n(t) { return function(e) { return "translate(" + t(e) + ",0)" } }

                function r(t) { var e = t(0); return function(a) { return Math.abs(t(a) - e) } }
                d3.bullet = function() {
                    function l(t) { t.each(function(t, e) {
                            function a() { s = d3.select("#bullets").node().getBoundingClientRect().width - i.left - i.right, w = r(v), v.range(d ? [s, 0] : [0, s]), y.selectAll(".bullet-measure").attr("width", w).attr("x", d ? v : 0), y.selectAll(".bullet-range").attr("width", w).attr("x", d ? v : 0), y.selectAll(".bullet-marker").attr("x1", v).attr("x2", v), y.selectAll(".bullet-tick").attr("transform", n(v)) } var l = u.call(this, t, e).slice().sort(d3.descending),
                                o = p.call(this, t, e).slice().sort(d3.descending),
                                g = f.call(this, t, e).slice().sort(d3.descending),
                                y = d3.select(this),
                                v = d3.scale.linear().domain([0, Math.max(l[0], o[0], g[0])]).range(d ? [s, 0] : [0, s]),
                                x = this.__chart__ || d3.scale.linear().domain([0, 1 / 0]).range(v.range());
                            this.__chart__ = v; var b = r(x),
                                w = r(v),
                                k = y.selectAll(".bullet-range").data(l);
                            k.enter().append("rect").attr("class", function(t, e) { return "bullet-range bullet-range-" + (e + 1) }).attr("width", b).attr("height", h).attr("rx", 2).attr("x", d ? x : 0).transition().duration(c).attr("width", w).attr("x", d ? v : 0), k.transition().duration(c).attr("x", d ? v : 0).attr("width", w).attr("height", h); var A = y.selectAll(".bullet-measure").data(g);
                            A.enter().append("rect").attr("class", function(t, e) { return "bullet-measure bullet-measure-" + (e + 1) }).attr("width", b).attr("height", h / 5).attr("x", d ? x : 0).attr("y", h / 2.5).style("shape-rendering", "crispEdges"), A.transition().duration(c).attr("width", w).attr("x", d ? v : 0), A.transition().duration(c).attr("width", w).attr("height", h / 5).attr("x", d ? v : 0).attr("y", h / 2.5); var z = y.selectAll(".bullet-marker").data(o);
                            z.enter().append("line").attr("class", function(t, e) { return "bullet-marker bullet-marker-" + (e + 1) }).attr("x1", x).attr("x2", x).attr("y1", h / 6).attr("y2", 5 * h / 6), z.transition().duration(c).attr("x1", v).attr("x2", v), z.transition().duration(c).attr("x1", v).attr("x2", v).attr("y1", h / 6).attr("y2", 5 * h / 6); var C = m || v.tickFormat(8),
                                M = y.selectAll(".bullet-tick").data(v.ticks(8), function(t) { return this.textContent || C(t) }),
                                B = M.enter().append("g").attr("class", "bullet-tick").attr("transform", n(x)).style("opacity", 1e-6);
                            B.append("line").attr("y1", h).attr("y2", 7 * h / 6 + 3), B.append("text").attr("text-anchor", "middle").attr("dy", "1em").attr("y", 7 * h / 6 + 4).text(C), B.transition().duration(c).attr("transform", n(v)).style("opacity", 1); var F = M.transition().duration(c).attr("transform", n(v)).style("opacity", 1);
                            F.select("line").attr("y1", h + 3).attr("y2", 7 * h / 6 + 3), F.select("text").attr("y", 7 * h / 6 + 4), M.exit().transition().duration(c).attr("transform", n(v)).style("opacity", 1e-6).remove(), $(window).on("resize", a), $(document).on("click", ".sidebar-control", a) }), d3.timer.flush() } var o = "left",
                        d = !1,
                        c = 750,
                        u = t,
                        p = e,
                        f = a,
                        h = 30,
                        m = null; return l.orient = function(t) { return arguments.length ? (o = t, d = "right" == o || "bottom" == o, l) : o }, l.ranges = function(t) { return arguments.length ? (u = t, l) : u }, l.markers = function(t) { return arguments.length ? (p = t, l) : p }, l.measures = function(t) { return arguments.length ? (f = t, l) : f }, l.width = function(t) { return arguments.length ? (s = t, l) : s }, l.height = function(t) { return arguments.length ? (h = t, l) : h }, l.tickFormat = function(t) { return arguments.length ? (m = t, l) : m }, l.duration = function(t) { return arguments.length ? (c = t, l) : c }, l } }(); var r = d3.select(t),
                i = { top: 20, right: 10, bottom: 35, left: 10 },
                s = s = r.node().getBoundingClientRect().width - i.left - i.right,
                e = e - i.top - i.bottom,
                l = d3.bullet().width(s).height(e);
            d3.json("assets/demo_data/dashboard/bullets.json", function(t, n) {
                function o() { s = r.node().getBoundingClientRect().width - i.left - i.right, d.attr("width", s + i.left + i.right), c.attr("width", s + i.left + i.right), c.selectAll(".bullet-subtitle").attr("x", s) } if (t) return console.error(t); var d = r.selectAll("svg").data(n).enter().append("svg"),
                    c = d.attr("class", function(t, e) { return "bullet-" + (e + 1) }).attr("width", s + i.left + i.right).attr("height", e + i.top + i.bottom).append("g").attr("transform", "translate(" + i.left + "," + i.top + ")").call(l),
                    u = c.append("g").style("text-anchor", "start");
                u.append("text").attr("class", "bullet-title").attr("y", -10).text(function(t) { return t.title }), u.append("text").attr("class", "bullet-subtitle").attr("x", s).attr("y", -10).style("text-anchor", "end").text(function(t) { return t.subtitle }).style("opacity", 0).transition().duration(500).delay(500).style("opacity", 1); var p = function() { c.datum(a).call(l.duration(750)) },
                    f = [];
                f.push(setInterval(function() { p() }, 5e3)); var h = document.querySelector(".switcher");
                new Switchery(h), h.onchange = function() { if (h.checked) f.push(setInterval(function() { p() }, 5e3));
                    else
                        for (var t = 0; t < f.length; t++) clearInterval(f[t]) }, $(window).on("resize", o), $(document).on("click", ".sidebar-control", o) }) }("#bullets", 80), $(".table tr").each(function(t) { var e = $(this).find(".letter-icon-title"),
                a = e.eq(0).text().charAt(0).toUpperCase();
            $(this).find(".letter-icon").eq(0).text(a) })
});