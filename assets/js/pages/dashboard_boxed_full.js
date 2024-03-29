$(function() {
    function t(t, e, a, n, r, s, i, l) {
        function o() { A.attr("transform", null).transition().duration(s).ease("linear").attr("transform", "translate(" + h(0) + ",0)"), "area" == e ? A.attr("d", v).attr("class", "d3-area").style("fill", l) : A.attr("d", y).attr("class", "d3-line d3-line-medium").style("stroke", l) }

        function d() { p = c.node().getBoundingClientRect().width - u.left - u.right, b.attr("width", p + u.left + u.right), x.attr("width", p + u.left + u.right), h.range([0, p]), k.attr("width", p), x.select(".d3-line").attr("d", y), x.select(".d3-area").attr("d", v) } for (var c = d3.select(t), u = { top: 0, right: 0, bottom: 0, left: 0 }, p = c.node().getBoundingClientRect().width - u.left - u.right, n = n - u.top - u.bottom, m = [], f = 0; f < a; f++) m.push(Math.floor(Math.random() * a) + 5); var h = d3.scale.linear().range([0, p]),
            g = d3.scale.linear().range([n - 5, 5]);
        h.domain([1, a - 3]), g.domain([0, a]); var y = d3.svg.line().interpolate(r).x(function(t, e) { return h(e) }).y(function(t, e) { return g(t) }),
            v = d3.svg.area().interpolate(r).x(function(t, e) { return h(e) }).y0(n).y1(function(t) { return g(t) }),
            b = c.append("svg"),
            x = b.attr("width", p + u.left + u.right).attr("height", n + u.top + u.bottom).append("g").attr("transform", "translate(" + u.left + "," + u.top + ")"),
            w = x.append("defs").append("clipPath").attr("id", function(e, a) { return "load-clip-" + t.substring(1) }),
            k = w.append("rect").attr("class", "load-clip").attr("width", 0).attr("height", n);
        k.transition().duration(1e3).ease("linear").attr("width", p); var A = x.append("g").attr("clip-path", function(e, a) { return "url(#load-clip-" + t.substring(1) + ")" }).append("path").datum(m).attr("transform", "translate(" + h(0) + ",0)"); "area" == e ? A.attr("d", v).attr("class", "d3-area").style("fill", l) : A.attr("d", y).attr("class", "d3-line d3-line-medium").style("stroke", l), A.style("opacity", 0).transition().duration(750).style("opacity", 1), setInterval(function() { m.push(Math.floor(Math.random() * a) + 5), m.shift(), o() }, i), $(window).on("resize", d), $(".sidebar-control").on("click", d) }

    function e(t, e, a, n) {
        function r() { var t = d3.interpolate(0, o); return function(e) { var a = o / (100 / e),
                    n = d.endAngle(l * a); return d(t(n)) } } var s = d3.select(t),
            i = Math.min(e / 2, a / 2) - 2,
            l = 2 * Math.PI,
            o = $(t).data("progress"),
            d = d3.svg.arc().startAngle(0).innerRadius(0).outerRadius(i).endAngle(function(t) { return t.value / t.size * 2 * Math.PI }),
            c = s.append("svg"),
            u = c.attr("width", e).attr("height", a).append("g").attr("transform", "translate(" + e / 2 + "," + a / 2 + ")"),
            p = u.append("g").attr("class", "progress-meter");
        p.append("path").attr("d", d.endAngle(l)).style("fill", "#fff").style("stroke", n).style("stroke-width", 1.5), p.append("path").style("fill", n).transition().ease("cubic-out").duration(2500).attrTween("d", r) }

    function a(t, e, a, n, r, s, i, l, o) {
        function d() { m = p.node().getBoundingClientRect().width, g.attr("width", m), y.attr("width", m), f.rangeBands([0, m], .3), y.selectAll(".d3-random-bars").attr("width", f.rangeBand()).attr("x", function(t, e) { return f(e) }) } for (var c = [], u = 0; u < e; u++) c.push(Math.round(10 * Math.random()) + 10); var p = d3.select(t),
            m = p.node().getBoundingClientRect().width,
            f = d3.scale.ordinal().rangeBands([0, m], .3),
            h = d3.scale.linear().range([0, a]);
        f.domain(d3.range(0, c.length)), h.domain([0, d3.max(c)]); var g = p.append("svg"),
            y = g.attr("width", m).attr("height", a).append("g"),
            v = y.selectAll("rect").data(c).enter().append("rect").attr("class", "d3-random-bars").attr("width", f.rangeBand()).attr("x", function(t, e) { return f(e) }).style("fill", l),
            b = d3.tip().attr("class", "d3-tip").offset([-10, 0]); "hours" != o && "goal" != o && "members" != o || v.call(b).on("mouseover", b.show).on("mouseout", b.hide), "hours" == o && b.html(function(t, e) { return "<div class='text-center'><h6 class='no-margin'>" + t + "</h6><span class='text-size-small'>meetings</span><div class='text-size-small'>" + e + ":00</div></div>" }), "goal" == o && b.html(function(t, e) { return "<div class='text-center'><h6 class='no-margin'>" + t + "</h6><span class='text-size-small'>statements</span><div class='text-size-small'>" + e + ":00</div></div>" }), "members" == o && b.html(function(t, e) { return "<div class='text-center'><h6 class='no-margin'>" + t + "0</h6><span class='text-size-small'>members</span><div class='text-size-small'>" + e + ":00</div></div>" }), n ? function() { v.attr("height", 0).attr("y", a).transition().attr("height", function(t) { return h(t) }).attr("y", function(t) { return a - h(t) }).delay(function(t, e) { return e * i }).duration(s).ease(r) }() : function() { v.attr("height", function(t) { return h(t) }).attr("y", function(t) { return a - h(t) }) }(), $(window).on("resize", d), $(".sidebar-control").on("click", d) }

    function n(t, e, a, n, r, s, i, l) {
        function o(t) { b.attr("d", v.endAngle(u * t)), x.attr("d", v.endAngle(u * t)), w.text(p(t)) } var d = d3.select(t),
            c = r,
            u = 2 * Math.PI,
            p = d3.format(".0%"),
            m = 2 * e,
            f = Math.abs((c - 0) / .01),
            h = c < 0 ? -.01 : .01,
            g = d.append("svg"),
            y = g.attr("width", m).attr("height", m).append("g").attr("transform", "translate(" + m / 2 + "," + m / 2 + ")"),
            v = d3.svg.arc().startAngle(0).innerRadius(e).outerRadius(e - a);
        y.append("path").attr("class", "d3-progress-background").attr("d", v.endAngle(u)).style("fill", "#eee"); var b = y.append("path").attr("class", "d3-progress-foreground").attr("filter", "url(#blur)").style("fill", n).style("stroke", n),
            x = y.append("path").attr("class", "d3-progress-front").style("fill", n).style("fill-opacity", 1),
            w = d3.select(t).append("h2").attr("class", "mt-15 mb-5");
        d3.select(t).append("i").attr("class", s + " counter-icon").attr("style", "top: " + (m - 32) / 2 + "px"), d3.select(t).append("div").text(i), d3.select(t).append("div").attr("class", "text-size-small text-muted").text(l); var k = 0;! function t() { o(k), f > 0 && (f--, k += h, setTimeout(t, 10)) }() }
    Array.prototype.slice.call(document.querySelectorAll(".switch")).forEach(function(t) { new Switchery(t, { color: "#4CAF50" }) }), $(".menu-list").find("li").has("ul").parents(".menu-list").addClass("has-children"), $(".has-children").dcDrilldown({ defaultText: "Back to parent", saveState: !0 }), $(window).on("resize", function() { setTimeout(function() { $(window).width() <= 768 ? ($(".menu-list").getNiceScroll().remove(), $(".menu-list").removeAttr("style").removeAttr("tabindex")) : $(".menu-list").niceScroll({ mousescrollstep: 100, cursorcolor: "#ccc", cursorborder: "", cursorwidth: 3, hidecursordelay: 200, autohidemode: "scroll", railpadding: { right: .5 } }) }, 200) }).resize(), $(".daterange-ranges").daterangepicker({ startDate: moment().subtract(29, "days"), endDate: moment(), minDate: "01/01/2012", maxDate: "12/31/2016", dateLimit: { days: 60 }, ranges: { Today: [moment(), moment()], Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")], "Last 7 Days": [moment().subtract(6, "days"), moment()], "Last 30 Days": [moment().subtract(29, "days"), moment()], "This Month": [moment().startOf("month"), moment().endOf("month")], "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")] }, opens: "left", applyClass: "btn-small bg-slate-600 btn-block", cancelClass: "btn-small btn-default btn-block", format: "MM/DD/YYYY" }, function(t, e) { $(".daterange-ranges span").html(t.format("MMMM D") + " - " + e.format("MMMM D")) }), $(".daterange-ranges span").html(moment().subtract(29, "days").format("MMMM D") + " - " + moment().format("MMMM D")), $("#reportrange").daterangepicker({ startDate: moment().subtract(29, "days"), endDate: moment(), minDate: "01/01/2014", maxDate: "12/31/2016", dateLimit: { days: 60 }, ranges: { Today: [moment(), moment()], Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")], "Last 7 Days": [moment().subtract(6, "days"), moment()], "This Month": [moment().startOf("month"), moment().endOf("month")], "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")] }, opens: "left", buttonClasses: ["btn"], applyClass: "btn-small bg-slate btn-block", cancelClass: "btn-small btn-default btn-block", format: "MM/DD/YYYY", separator: " to ", locale: { applyLabel: "Submit", fromLabel: "From", toLabel: "To", customRangeLabel: "Custom Range", daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], firstDay: 1 } }, function(t, e) { $("#reportrange .daterange-custom-display").html(t.format("<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>") + "<em>&#8211;</em>" + e.format("<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>")) }), $("#reportrange .daterange-custom-display").html(moment().subtract(29, "days").format("<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>") + "<em>&#8211;</em>" + moment().format("<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>")),
        function(t, e) {
            function a() { s = n.node().getBoundingClientRect().width - r.left - r.right, y.attr("width", s + r.left + r.right), v.attr("width", s + r.left + r.right), c.range([0, s]), v.selectAll(".d3-axis-horizontal").call(m), v.selectAll(".d3-axis-subticks").attr("x1", c).attr("x2", c), v.selectAll(".d3-grid-dashed").call(g.tickSize(-s, 0, 0)), v.selectAll(".d3-axis-right").attr("transform", "translate(" + s + ", 0)"), v.selectAll(".streamgraph-layer").attr("d", function(t) { return w(t.values) }) } var n = d3.select(t),
                r = { top: 5, right: 50, bottom: 40, left: 50 },
                s = n.node().getBoundingClientRect().width - r.left - r.right,
                e = e - r.top - r.bottom,
                i = n.append("div").attr("class", "d3-tip e").style("display", "none"),
                l = d3.time.format("%m/%d/%y %H:%M"),
                o = d3.time.format("%H:%M"),
                d = ["#03A9F4", "#29B6F6", "#4FC3F7", "#81D4FA", "#B3E5FC", "#E1F5FE"],
                c = d3.time.scale().range([0, s]),
                u = d3.scale.linear().range([e, 0]),
                p = d3.scale.ordinal().range(d),
                m = d3.svg.axis().scale(c).orient("bottom").ticks(d3.time.hours, 4).innerTickSize(4).tickPadding(8).tickFormat(d3.time.format("%H:%M")),
                f = d3.svg.axis().scale(u).ticks(6).innerTickSize(4).outerTickSize(0).tickPadding(8).tickFormat(function(t) { return t / 1e3 + "k" }),
                h = f,
                g = d3.svg.axis().scale(u).orient("left").ticks(6).tickPadding(8).tickFormat("").tickSize(-s, 0, 0),
                y = n.append("svg"),
                v = y.attr("width", s + r.left + r.right).attr("height", e + r.top + r.bottom).append("g").attr("transform", "translate(" + r.left + "," + r.top + ")"),
                b = d3.layout.stack().offset("silhouette").values(function(t) { return t.values }).x(function(t) { return t.date }).y(function(t) { return t.value }),
                x = d3.nest().key(function(t) { return t.key }),
                w = d3.svg.area().interpolate("cardinal").x(function(t) { return c(t.date) }).y0(function(t) { return u(t.y0) }).y1(function(t) { return u(t.y0 + t.y) });
            d3.csv("assets/demo_data/dashboard/traffic_sources.csv", function(a, d) { d.forEach(function(t) { t.date = l.parse(t.date), t.value = +t.value }); var y = b(x.entries(d));
                c.domain(d3.extent(d, function(t, e) { return t.date })), u.domain([0, d3.max(d, function(t) { return t.y0 + t.y })]), v.append("g").attr("class", "d3-grid-dashed").call(g); var k = v.append("g").attr("class", "streamgraph-layers-group"),
                    A = k.selectAll(".streamgraph-layer").data(y).enter().append("path").attr("class", "streamgraph-layer").attr("d", function(t) { return w(t.values) }).style("stroke", "#fff").style("stroke-width", .5).style("fill", function(t, e) { return p(e) }),
                    M = A.style("opacity", 0).transition().duration(750).delay(function(t, e) { return 50 * e }).style("opacity", 1);
                v.append("g").attr("class", "d3-axis d3-axis-left d3-axis-solid").call(f.orient("left")), d3.select(v.selectAll(".d3-axis-left .tick text")[0][0]).style("visibility", "hidden"), v.append("g").attr("class", "d3-axis d3-axis-right d3-axis-solid").attr("transform", "translate(" + s + ", 0)").call(h.orient("right")), d3.select(v.selectAll(".d3-axis-right .tick text")[0][0]).style("visibility", "hidden"), v.append("g").attr("class", "d3-axis d3-axis-horizontal d3-axis-solid").attr("transform", "translate(0," + e + ")").call(m).selectAll(".d3-axis-subticks").data(c.ticks(d3.time.hours), function(t) { return t }).enter().append("line").attr("class", "d3-axis-subticks").attr("y1", 0).attr("y2", 4).attr("x1", c).attr("x2", c); var C = k.append("g").attr("class", "hover-line"),
                    z = C.append("line").attr("y1", 0).attr("y2", e).style("fill", "none").style("stroke", "#fff").style("stroke-width", 1).style("pointer-events", "none").style("shape-rendering", "crispEdges").style("opacity", 0),
                    B = C.append("rect").attr("x", 2).attr("y", 2).attr("width", 6).attr("height", 6).style("fill", "#03A9F4").style("stroke", "#fff").style("stroke-width", 1).style("shape-rendering", "crispEdges").style("pointer-events", "none").style("opacity", 0);
                M.each("end", function() { A.on("mouseover", function(t, e) { v.selectAll(".streamgraph-layer").transition().duration(250).style("opacity", function(t, a) { return a != e ? .75 : 1 }) }).on("mousemove", function(t, e) { mouse = d3.mouse(this), mousex = mouse[0], mousey = mouse[1], datearray = []; var a = c.invert(mousex);
                        a = a.getHours(); for (var n = t.values, r = 0; r < n.length; r++) datearray[r] = n[r].date, datearray[r] = datearray[r].getHours();
                        mousedate = datearray.indexOf(a), pro = t.values[mousedate].value, B.attr("x", mousex - 3).attr("y", mousey - 6).style("opacity", 1), z.attr("x1", mousex).attr("x2", mousex).style("opacity", 1), i.html("<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>" + t.key + "</div></li><li>Visits: &nbsp;<span class='text-semibold pull-right'>" + pro + "</span></li><li>Time: &nbsp; <span class='text-semibold pull-right'>" + o(t.values[mousedate].date) + "</span></li></ul>").style("display", "block"), i.append("div").attr("class", "d3-tip-arrow") }).on("mouseout", function(t, e) { v.selectAll(".streamgraph-layer").transition().duration(250).style("opacity", 1), B.style("opacity", 0), i.style("display", "none"), z.style("opacity", 0) }) }), n.on("mousemove", function(e, a) { mouse = d3.mouse(this), mousex = mouse[0], mousey = mouse[1], i.style("top", mousey - $(".d3-tip").outerHeight() / 2 - 2 + "px"), mousex >= $(t).outerWidth() - $(".d3-tip").outerWidth() - r.right - 60 ? i.style("left", mousex - $(".d3-tip").outerWidth() - 30 + "px").attr("class", "d3-tip w") : i.style("left", mousex + 30 + "px").attr("class", "d3-tip e") }) }), $(window).on("resize", a), $(".sidebar-control").on("click", a) }("#traffic-sources", 330),
        function(t, e) {
            function a() { d3.transition().duration(f ? 7500 : 500).each(n) }

            function n() {
                function t() { i = r.node().getBoundingClientRect().width - s.left - s.right, u.attr("width", i + s.left + s.right), p.attr("width", i + s.left + s.right), g.range([0, i]), y.range([e, 0]), p.select(".d3-axis-horizontal").call(v), p.select(".d3-axis-vertical").call(b.tickSize(0 - i)), p.selectAll(".d3-line").attr("d", function(t, e) { return h(t.values) }), p.selectAll(".d3-line-circle").attr("cx", function(t, e) { return g(t.date) }) } var a = d3.nest().key(function(t) { return t.type }).map(formatted),
                    n = m.val(),
                    d = a[n];
                c.domain(d3.keys(d[0]).filter(function(t) { return "date" !== t && "type" !== t })); var f = c.domain().map(function(t) { return { name: t, values: d.map(function(e) { return { name: t, date: o(e.date), value: parseFloat(e[t], 10) } }) } }),
                    h = d3.svg.line().x(function(t) { return g(t.date) }).y(function(t) { return y(t.value) }).interpolate("cardinal"),
                    g = d3.time.scale().domain([d3.min(f, function(t) { return d3.min(t.values, function(t) { return t.date }) }), d3.max(f, function(t) { return d3.max(t.values, function(t) { return t.date }) })]).range([0, i]),
                    y = d3.scale.linear().domain([d3.min(f, function(t) { return d3.min(t.values, function(t) { return t.value }) }), d3.max(f, function(t) { return d3.max(t.values, function(t) { return t.value }) })]).range([e, 0]),
                    v = d3.svg.axis().scale(g).orient("bottom").tickPadding(8).ticks(d3.time.days).innerTickSize(4).tickFormat(d3.time.format("%a")),
                    b = d3.svg.axis().scale(y).orient("left").ticks(6).tickSize(0 - i).tickPadding(8);
                p.append("g").attr("class", "d3-axis d3-axis-horizontal d3-axis-solid").attr("transform", "translate(0," + e + ")"), p.append("g").attr("class", "d3-axis d3-axis-vertical d3-axis-transparent"); var x = p.selectAll(".lines").data(f);
                x.enter().append("g").attr("class", "lines").attr("id", function(t) { return t.name + "-line" }).append("path").attr("class", "d3-line d3-line-medium").style("stroke", function(t) { return c(t.name) }).style("opacity", 0).attr("d", function(t) { return h(t.values[0]) }).transition().duration(500).delay(function(t, e) { return 200 * e }).style("opacity", 1); var w = x.selectAll("circle").data(function(t) { return t.values }).enter().append("circle").attr("class", "d3-line-circle d3-line-circle-medium").attr("cx", function(t, e) { return g(t.date) }).attr("cy", function(t, e) { return y(t.value) }).attr("r", 3).style("fill", "#fff").style("stroke", function(t) { return c(t.name) });
                w.style("opacity", 0).transition().duration(500).delay(500).style("opacity", 1), w.on("mouseover", function(t) { l.offset([-15, 0]).show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { l.hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), x.each(function(t) { d3.select(d3.select(this).selectAll("circle")[0][0]).on("mouseover", function(t) { l.offset([0, 15]).direction("e").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { l.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }) }), x.each(function(t) { d3.select(d3.select(this).selectAll("circle")[0][d3.select(this).selectAll("circle").size() - 1]).on("mouseover", function(t) { l.offset([0, -15]).direction("w").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { l.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }) }); var k = d3.transition(x);
                k.select("path").attr("d", function(t, e) { return h(t.values) }), k.selectAll("circle").attr("cy", function(t, e) { return y(t.value) }).attr("cx", function(t, e) { return g(t.date) }), d3.transition(p).select(".d3-axis-vertical").call(b), d3.transition(p).select(".d3-axis-horizontal").attr("transform", "translate(0," + e + ")").call(v), $(window).on("resize", t), $(".sidebar-control").on("click", t) } var r = d3.select(t),
                s = { top: 5, right: 30, bottom: 30, left: 50 },
                i = r.node().getBoundingClientRect().width - s.left - s.right,
                e = e - s.top - s.bottom,
                l = d3.tip().attr("class", "d3-tip").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>" + t.name + " app</div></li><li>Sales: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Revenue: &nbsp; <span class='text-semibold pull-right'>$" + (25 * t.value).toFixed(2) + "</span></li></ul>" }),
                o = d3.time.format("%Y/%m/%d").parse,
                d = (d3.time.format("%b %d, '%y"), ["#4CAF50", "#FF5722", "#5C6BC0"]),
                c = d3.scale.ordinal().range(d),
                u = r.append("svg"),
                p = u.attr("width", i + s.left + s.right).attr("height", e + s.top + s.bottom).append("g").attr("transform", "translate(" + s.left + "," + s.top + ")").call(l),
                m = $("#select_date").multiselect({ buttonClass: "btn btn-link text-semibold", enableHTML: !0, dropRight: !0, onChange: function() { a(), $.uniform.update() }, buttonText: function(t, e) { var a = ""; return t.each(function() { a += $(this).html() + ", " }), '<span class="status-mark border-warning position-left"></span>' + a.substr(0, a.length - 2) } });
            $(".multiselect-container input").uniform({ radioClass: "choice" }), d3.csv("assets/demo_data/dashboard/app_sales.csv", function(t, e) { formatted = e, n() }); var f;
            d3.select(window).on("keydown", function() { f = d3.event.altKey }).on("keyup", function() { f = !1 }) }("#app_sales", 255),
        function(t, e, a) { var n = d3.select(t),
                r = { top: 20, right: 35, bottom: 40, left: 35 },
                s = n.node().getBoundingClientRect().width - r.left - r.right,
                e = e - r.top - r.bottom,
                i = d3.time.format("%Y-%m-%d").parse,
                l = d3.bisector(function(t) { return t.date }).left,
                o = d3.time.format("%b %d"),
                d = n.append("svg"),
                c = d.attr("width", s + r.left + r.right).attr("height", e + r.top + r.bottom).append("g").attr("transform", "translate(" + r.left + "," + r.top + ")"),
                u = d3.svg.area().x(function(t) { return p(t.date) }).y0(e).y1(function(t) { return m(t.value) }).interpolate("monotone"),
                p = d3.time.scale().range([0, s]),
                m = d3.scale.linear().range([e, 0]),
                f = d3.svg.axis().scale(p).orient("bottom").ticks(d3.time.days, 6).innerTickSize(4).tickPadding(8).tickFormat(d3.time.format("%b %d"));
            d3.json("assets/demo_data/dashboard/monthly_sales.json", function(t, h) {
                function g() { var t = d3.mouse(this),
                        a = t[0],
                        s = (t[1], p.invert(a)),
                        i = l(h, s),
                        d = h[i - 1],
                        c = h[i],
                        u = s - d.date > c.date - s ? c : d;
                    x.attr("transform", "translate(" + p(u.date) + "," + e + ")"), w.attr("transform", "translate(" + p(u.date) + "," + m(u.value) + ")"), a >= n.node().getBoundingClientRect().width - k.select("text").node().getBoundingClientRect().width - r.right - r.left ? k.select("text").attr("text-anchor", "end").attr("x", function() { return p(u.date) - 15 + "px" }).text(o(u.date) + " - " + u.value + " sales") : k.select("text").attr("text-anchor", "start").attr("x", function() { return p(u.date) + 15 + "px" }).text(o(u.date) + " - " + u.value + " sales") }

                function y() { s = n.node().getBoundingClientRect().width - r.left - r.right, d.attr("width", s + r.left + r.right), c.attr("width", s + r.left + r.right), p.range([0, s]), c.selectAll(".d3-axis-horizontal").call(f), c.selectAll(".d3-axis-subticks").attr("x1", p).attr("x2", p), c.selectAll(".d3-area").datum(h).attr("d", u), c.selectAll(".d3-crosshair-overlay").attr("width", s) } if (t) return console.error(t);
                h.forEach(function(t) { t.date = i(t.date), t.value = +t.value }); var v = d3.max(h, function(t) { return t.value }),
                    b = h.map(function(t) { return { date: t.date, value: 0 } });
                p.domain(d3.extent(h, function(t, e) { return t.date })), m.domain([0, d3.max(h, function(t) { return t.value })]), c.append("g").attr("class", "d3-axis d3-axis-horizontal d3-axis-solid").attr("transform", "translate(0," + e + ")").call(f).selectAll(".d3-axis-subticks").data(p.ticks(d3.time.days), function(t) { return t }).enter().append("line").attr("class", "d3-axis-subticks").attr("y1", 0).attr("y2", 4).attr("x1", p).attr("x2", p), c.append("path").datum(h).attr("class", "d3-area").attr("d", u).style("fill", a).transition().duration(1e3).attrTween("d", function() { var t = d3.interpolateArray(b, h); return function(e) { return u(t(e)) } }); var x = c.append("g").attr("class", "d3-crosshair-line").style("display", "none");
                x.append("line").attr("class", "vertical-crosshair").attr("y1", 0).attr("y2", -v).style("stroke", "#e5e5e5").style("shape-rendering", "crispEdges"); var w = c.append("g").attr("class", "d3-crosshair-pointer").style("display", "none");
                w.append("circle").attr("r", 3).style("fill", "#fff").style("stroke", a).style("stroke-width", 1); var k = c.append("g").attr("class", "d3-crosshair-text").style("display", "none");
                k.append("text").attr("dy", -10).style("font-size", 12), c.append("rect").attr("class", "d3-crosshair-overlay").style("fill", "none").style("pointer-events", "all").attr("width", s).attr("height", e).on("mouseover", function() { w.style("display", null), x.style("display", null), k.style("display", null) }).on("mouseout", function() { w.style("display", "none"), x.style("display", "none"), k.style("display", "none") }).on("mousemove", g), $(window).on("resize", y), $(".sidebar-control").on("click", y) }) }("#monthly-sales-stats", 100, "#4DB6AC"),
        function(t, e, a) { var n = d3.select(t),
                r = { top: 0, right: 0, bottom: 0, left: 0 },
                s = n.node().getBoundingClientRect().width - r.left - r.right,
                e = e - r.top - r.bottom,
                i = d3.time.format("%Y-%m-%d").parse,
                l = n.append("svg"),
                o = l.attr("width", s + r.left + r.right).attr("height", e + r.top + r.bottom).append("g").attr("transform", "translate(" + r.left + "," + r.top + ")"),
                d = d3.svg.area().x(function(t) { return c(t.date) }).y0(e).y1(function(t) { return u(t.value) }).interpolate("monotone"),
                c = d3.time.scale().range([0, s]),
                u = d3.scale.linear().range([e, 0]);
            d3.json("assets/demo_data/dashboard/monthly_sales.json", function(t, e) {
                function p() { s = n.node().getBoundingClientRect().width - r.left - r.right, l.attr("width", s + r.left + r.right), o.attr("width", s + r.left + r.right), c.range([0, s]), o.selectAll(".d3-area").datum(e).attr("d", d) } if (t) return console.error(t);
                e.forEach(function(t) { t.date = i(t.date), t.value = +t.value }); var m = (d3.max(e, function(t) { return t.value }), e.map(function(t) { return { date: t.date, value: 0 } }));
                c.domain(d3.extent(e, function(t, e) { return t.date })), u.domain([0, d3.max(e, function(t) { return t.value })]), o.append("path").datum(e).attr("class", "d3-area").style("fill", a).attr("d", d).transition().duration(1e3).attrTween("d", function() { var t = d3.interpolateArray(m, e); return function(e) { return d(t(e)) } }), $(window).on("resize", p), $(".sidebar-control").on("click", p) }) }("#messages-stats", 40, "#5C6BC0"), t("#new-visitors", "line", 30, 35, "basis", 750, 2e3, "#26A69A"), t("#new-sessions", "line", 30, 35, "basis", 750, 2e3, "#FF7043"), t("#total-online", "line", 30, 35, "basis", 750, 2e3, "#5C6BC0"), t("#server-load", "area", 30, 50, "basis", 750, 2e3, "rgba(255,255,255,0.5)"),
        function(t, e) {
            function a() { i = r.node().getBoundingClientRect().width - s.left - s.right, u.attr("width", i + s.left + s.right), p.attr("width", i + s.left + s.right), m.range([l, i - l]), y.attr("width", i), p.selectAll(".d3-line").attr("d", h(n)), p.selectAll(".d3-line-circle").attr("cx", h.x()), p.selectAll(".d3-line-guides").attr("x1", function(t, e) { return m(t.date) }).attr("x2", function(t, e) { return m(t.date) }) } var n = [{ date: "04/13/14", alpha: "60" }, { date: "04/14/14", alpha: "35" }, { date: "04/15/14", alpha: "65" }, { date: "04/16/14", alpha: "50" }, { date: "04/17/14", alpha: "65" }, { date: "04/18/14", alpha: "20" }, { date: "04/19/14", alpha: "60" }],
                r = d3.select(t),
                s = { top: 0, right: 0, bottom: 0, left: 0 },
                i = r.node().getBoundingClientRect().width - s.left - s.right,
                e = e - s.top - s.bottom,
                l = 20,
                o = d3.time.format("%m/%d/%y").parse,
                d = d3.time.format("%a, %B %e"),
                c = d3.tip().attr("class", "d3-tip").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mt-5 mb-5'><i class='icon-check2 position-left'></i>" + d(t.date) + "</div></li><li>Sales: &nbsp;<span class='text-semibold pull-right'>" + t.alpha + "</span></li><li>Revenue: &nbsp; <span class='text-semibold pull-right'>$" + (25 * t.alpha).toFixed(2) + "</span></li></ul>" }),
                u = r.append("svg"),
                p = u.attr("width", i + s.left + s.right).attr("height", e + s.top + s.bottom).append("g").attr("transform", "translate(" + s.left + "," + s.top + ")").call(c);
            n.forEach(function(t) { t.date = o(t.date), t.alpha = +t.alpha }); var m = d3.time.scale().range([l, i - l]),
                f = d3.scale.linear().range([e, 5]);
            m.domain(d3.extent(n, function(t) { return t.date })), f.domain([0, d3.max(n, function(t) { return Math.max(t.alpha) })]); var h = d3.svg.line().x(function(t) { return m(t.date) }).y(function(t) { return f(t.alpha) }),
                g = p.append("defs").append("clipPath").attr("id", "clip-line-small"),
                y = g.append("rect").attr("class", "clip").attr("width", 0).attr("height", e);
            y.transition().duration(1e3).ease("linear").attr("width", i), p.append("path").attr({ d: h(n), "clip-path": "url(#clip-line-small)", class: "d3-line d3-line-medium" }).style("stroke", "#fff"), p.select(".line-tickets").transition().duration(1e3).ease("linear"); var v = p.append("g").selectAll(".d3-line-guides-group").data(n);
            v.enter().append("line").attr("class", "d3-line-guides").attr("x1", function(t, e) { return m(t.date) }).attr("y1", function(t, a) { return e }).attr("x2", function(t, e) { return m(t.date) }).attr("y2", function(t, a) { return e }).style("stroke", "rgba(255,255,255,0.3)").style("stroke-dasharray", "4,2").style("shape-rendering", "crispEdges"), v.transition().duration(1e3).delay(function(t, e) { return 150 * e }).attr("y2", function(t, e) { return f(t.alpha) }); var b = p.insert("g").selectAll(".d3-line-circle").data(n).enter().append("circle").attr("class", "d3-line-circle d3-line-circle-medium").attr("cx", h.x()).attr("cy", h.y()).attr("r", 3).style("stroke", "#fff").style("fill", "#607D8B");
            b.style("opacity", 0).transition().duration(250).ease("linear").delay(1e3).style("opacity", 1), b.on("mouseover", function(t) { c.offset([-10, 0]).show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { c.hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), d3.select(b[0][0]).on("mouseover", function(t) { c.offset([0, 10]).direction("e").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { c.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), d3.select(b[0][b.size() - 1]).on("mouseover", function(t) { c.offset([0, -10]).direction("w").show(t), d3.select(this).transition().duration(250).attr("r", 4) }).on("mouseout", function(t) { c.direction("n").hide(t), d3.select(this).transition().duration(250).attr("r", 3) }), $(window).on("resize", a), $(".sidebar-control").on("click", a) }("#today-revenue", 50), e("#today-progress", 20, 20, "#7986CB"), e("#yesterday-progress", 20, 20, "#7986CB"),
        function(t, e) { var a = [{ browser: "Google Adwords", icon: "<i class='icon-google position-left'></i>", value: 1047, color: "#66BB6A" }, { browser: "Social media", icon: "<i class='icon-share4 position-left'></i>", value: 2948, color: "#9575CD" }, { browser: "Youtube video", icon: "<i class='icon-youtube position-left'></i>", value: 3909, color: "#FF7043" }],
                n = d3.select(t),
                r = e / 2 - 2,
                s = d3.sum(a, function(t) { return t.value }),
                i = d3.tip().attr("class", "d3-tip").offset([-10, 0]).direction("e").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>" + t.data.icon + t.data.browser + "</div></li><li>Visits: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>" + (100 / (s / t.value)).toFixed(2) + "%</span></li></ul>" }),
                l = n.append("svg").call(i),
                o = l.attr("width", e).attr("height", e).append("g").attr("transform", "translate(" + e / 2 + "," + e / 2 + ")"),
                d = d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3 * Math.PI).value(function(t) { return t.value }),
                c = d3.svg.arc().outerRadius(r).innerRadius(r / 2),
                u = o.selectAll(".d3-arc").data(d(a)).enter().append("g").attr("class", "d3-arc").style("stroke", "#fff").style("cursor", "pointer"),
                p = u.append("path").style("fill", function(t) { return t.data.color });
            p.on("mouseover", function(t, e) { d3.select(this).transition().duration(500).ease("elastic").attr("transform", function(t) { return t.midAngle = (t.endAngle - t.startAngle) / 2 + t.startAngle, "translate(" + 2 * Math.sin(t.midAngle) + "," + 2 * -Math.cos(t.midAngle) + ")" }) }).on("mousemove", function(t) { i.show(t).style("top", d3.event.pageY - 40 + "px").style("left", d3.event.pageX + 30 + "px") }).on("mouseout", function(t, e) { d3.select(this).transition().duration(500).ease("bounce").attr("transform", "translate(0,0)"), i.hide(t) }), p.transition().delay(function(t, e) { return 500 * e }).duration(500).attrTween("d", function(t) { var e = d3.interpolate(t.startAngle, t.endAngle); return function(a) { return t.endAngle = e(a), c(t) } }) }("#campaigns-donut", 42),
        function(t, e) { var a = [{ status: "Active campaigns", icon: "<span class='status-mark border-blue-300 position-left'></span>", value: 439, color: "#29B6F6" }, { status: "Closed campaigns", icon: "<span class='status-mark border-danger-300 position-left'></span>", value: 290, color: "#EF5350" }, { status: "Pending campaigns", icon: "<span class='status-mark border-success-300 position-left'></span>", value: 190, color: "#81C784" }, { status: "Campaigns on hold", icon: "<span class='status-mark border-grey-300 position-left'></span>", value: 148, color: "#999" }],
                n = d3.select(t),
                r = e / 2 - 2,
                s = d3.sum(a, function(t) { return t.value }),
                i = d3.tip().attr("class", "d3-tip").offset([-10, 0]).direction("e").html(function(t) { return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>" + t.data.icon + t.data.status + "</div></li><li>Total: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>" + (100 / (s / t.value)).toFixed(2) + "%</span></li></ul>" }),
                l = n.append("svg").call(i),
                o = l.attr("width", e).attr("height", e).append("g").attr("transform", "translate(" + e / 2 + "," + e / 2 + ")"),
                d = d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3 * Math.PI).value(function(t) { return t.value }),
                c = d3.svg.arc().outerRadius(r).innerRadius(r / 2),
                u = o.selectAll(".d3-arc").data(d(a)).enter().append("g").attr("class", "d3-arc").style("stroke", "#fff").style("cursor", "pointer"),
                p = u.append("path").style("fill", function(t) { return t.data.color });
            p.on("mouseover", function(t, e) { d3.select(this).transition().duration(500).ease("elastic").attr("transform", function(t) { return t.midAngle = (t.endAngle - t.startAngle) / 2 + t.startAngle, "translate(" + 2 * Math.sin(t.midAngle) + "," + 2 * -Math.cos(t.midAngle) + ")" }) }).on("mousemove", function(t) { i.show(t).style("top", d3.event.pageY - 40 + "px").style("left", d3.event.pageX + 30 + "px") }).on("mouseout", function(t, e) { d3.select(this).transition().duration(500).ease("bounce").attr("transform", "translate(0,0)"), i.hide(t) }), p.transition().delay(function(t, e) { return 500 * e }).duration(500).attrTween("d", function(t) { var e = d3.interpolate(t.startAngle, t.endAngle); return function(a) { return t.endAngle = e(a), c(t) } }) }("#campaign-status-pie", 42),
        function(t, e) {
            var a = [{ status: "Pending tickets", icon: "<i class='status-mark border-blue-300 position-left'></i>", value: 295, color: "#29B6F6" }, { status: "Resolved tickets", icon: "<i class='status-mark border-success-300 position-left'></i>", value: 189, color: "#66BB6A" }, { status: "Closed tickets", icon: "<i class='status-mark border-danger-300 position-left'></i>", value: 277, color: "#EF5350" }],
                n = d3.select(t),
                r = e / 2 - 2,
                s = d3.sum(a, function(t) { return t.value }),
                i = d3.tip().attr("class", "d3-tip").offset([-10, 0]).direction("e").html(function(t) {
                    return "<ul class='list-unstyled mb-5'><li><div class='text-size-base mb-5 mt-5'>" + t.data.icon + t.data.status + "</div></li><li>Total: &nbsp;<span class='text-semibold pull-right'>" + t.value + "</span></li><li>Share: &nbsp;<span class='text-semibold pull-right'>" + (100 / (s / t.value)).toFixed(2) + "%</span></li></ul>"
                }),
                l = n.append("svg").call(i),
                o = l.attr("width", e).attr("height", e).append("g").attr("transform", "translate(" + e / 2 + "," + e / 2 + ")"),
                d = d3.layout.pie().sort(null).startAngle(Math.PI).endAngle(3 * Math.PI).value(function(t) { return t.value }),
                c = d3.svg.arc().outerRadius(r).innerRadius(r / 2),
                u = o.selectAll(".d3-arc").data(d(a)).enter().append("g").attr("class", "d3-arc").style("stroke", "#fff").style("cursor", "pointer"),
                p = u.append("path").style("fill", function(t) { return t.data.color });
            p.on("mouseover", function(t, e) { d3.select(this).transition().duration(500).ease("elastic").attr("transform", function(t) { return t.midAngle = (t.endAngle - t.startAngle) / 2 + t.startAngle, "translate(" + 2 * Math.sin(t.midAngle) + "," + 2 * -Math.cos(t.midAngle) + ")" }) }).on("mousemove", function(t) { i.show(t).style("top", d3.event.pageY - 40 + "px").style("left", d3.event.pageX + 30 + "px") }).on("mouseout", function(t, e) { d3.select(this).transition().duration(500).ease("bounce").attr("transform", "translate(0,0)"), i.hide(t) }), p.transition().delay(function(t, e) { return 500 * e }).duration(500).attrTween("d", function(t) { var e = d3.interpolate(t.startAngle, t.endAngle); return function(a) { return t.endAngle = e(a), c(t) } })
        }("#tickets-status", 42), a("#hours-available-bars", 24, 40, !0, "elastic", 1200, 50, "#EC407A", "hours"), a("#goal-bars", 24, 40, !0, "elastic", 1200, 50, "#5C6BC0", "goal"), a("#members-online", 24, 50, !0, "elastic", 1200, 50, "rgba(255,255,255,0.5)", "members"), n("#hours-available-progress", 38, 2, "#F06292", .68, "icon-watch text-pink-400", "Hours available", "64% average"), n("#goal-progress", 38, 2, "#5C6BC0", .82, "icon-trophy3 text-indigo-400", "Productivity goal", "87% average"), $(".table tr").each(function(t) { var e = $(this).find(".letter-icon-title"),
                a = e.eq(0).text().charAt(0).toUpperCase();
            $(this).find(".letter-icon").eq(0).text(a) })
});