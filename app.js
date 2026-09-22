(() => {
  "use strict";

  const STORAGE_KEY = "visionpulse-papers-v1";
  const VIEW_NAMES = {
    dashboard: "热词总览",
    papers: "论文管理",
    import: "爬取与导入",
    trends: "热度趋势",
    about: "项目说明",
  };

  const SEED_PAPERS = [
    {
      id: "CVPR-2025-001",
      title: "SAM 2: Segment Anything in Images and Videos",
      venue: "CVPR",
      year: 2025,
      authors: "Nikhila Ravi, Valentin Gabeur",
      keywords: ["Segmentation", "Foundation Models", "Video Understanding"],
      abstract: "A general-purpose segmentation model that extends promptable segmentation from images to videos.",
      url: "https://arxiv.org/abs/2408.00714",
      source: "演示数据",
      addedAt: "2026-09-20",
    },
    {
      id: "CVPR-2025-002",
      title: "Grounding DINO: Marrying DINO with Grounded Pre-Training for Open-Set Object Detection",
      venue: "CVPR",
      year: 2025,
      authors: "Shilong Liu, Zhaoyang Zeng",
      keywords: ["Object Detection", "Vision-Language", "Foundation Models"],
      abstract: "A grounded pre-trained transformer for open-set object detection and visual grounding.",
      url: "https://arxiv.org/abs/2303.05499",
      source: "演示数据",
      addedAt: "2026-09-20",
    },
    {
      id: "ICCV-2025-001",
      title: "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion",
      venue: "ICCV",
      year: 2025,
      authors: "Chi Cheng, Suraj Nair",
      keywords: ["Diffusion Models", "Robotics", "Action Recognition"],
      abstract: "A diffusion-based approach for learning expressive visuomotor policies from demonstrations.",
      url: "https://arxiv.org/abs/2303.04137",
      source: "演示数据",
      addedAt: "2026-09-19",
    },
    {
      id: "ECCV-2024-001",
      title: "Depth Anything: Unleashing the Power of Large-Scale Unlabeled Data",
      venue: "ECCV",
      year: 2024,
      authors: "Lihe Yang, Bingyi Kang",
      keywords: ["Depth Estimation", "Self-Supervised Learning", "Foundation Models"],
      abstract: "A scalable monocular depth estimation framework trained with large-scale unlabeled data.",
      url: "https://arxiv.org/abs/2401.10891",
      source: "演示数据",
      addedAt: "2026-09-19",
    },
    {
      id: "CVPR-2024-001",
      title: "DINOv2: Learning Robust Visual Features without Supervision",
      venue: "CVPR",
      year: 2024,
      authors: "Maxime Oquab, Timothée Darcet",
      keywords: ["Self-Supervised Learning", "Representation Learning", "Vision Transformer"],
      abstract: "A self-supervised learning method that produces versatile visual features without labels.",
      url: "https://arxiv.org/abs/2304.07193",
      source: "演示数据",
      addedAt: "2026-09-18",
    },
    {
      id: "ICCV-2023-001",
      title: "NeRF in the Wild: Neural Radiance Fields for Unconstrained Photo Collections",
      venue: "ICCV",
      year: 2023,
      authors: "Alex Yu, Vickie Ye",
      keywords: ["Neural Rendering", "3D Vision", "Scene Reconstruction"],
      abstract: "Learning neural radiance fields from photo collections captured in uncontrolled conditions.",
      url: "https://arxiv.org/abs/2008.02268",
      source: "演示数据",
      addedAt: "2026-09-17",
    },
    {
      id: "ECCV-2022-001",
      title: "Masked Autoencoders Are Scalable Vision Learners",
      venue: "ECCV",
      year: 2022,
      authors: "Kaiming He, Xinlei Chen",
      keywords: ["Self-Supervised Learning", "Vision Transformer", "Representation Learning"],
      abstract: "A simple masked autoencoder that learns strong visual representations by reconstructing missing patches.",
      url: "https://arxiv.org/abs/2111.06377",
      source: "演示数据",
      addedAt: "2026-09-16",
    },
    {
      id: "CVPR-2023-001",
      title: "Segment Anything",
      venue: "CVPR",
      year: 2023,
      authors: "Alexander Kirillov, Eric Mintun",
      keywords: ["Segmentation", "Foundation Models", "Vision-Language"],
      abstract: "A promptable segmentation model and a large-scale segmentation dataset designed for broad generalization.",
      url: "https://arxiv.org/abs/2304.02643",
      source: "演示数据",
      addedAt: "2026-09-16",
    },
    {
      id: "ICCV-2023-002",
      title: "BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models",
      venue: "ICCV",
      year: 2023,
      authors: "Junnan Li, Dongxu Li",
      keywords: ["Vision-Language", "Multimodal Learning", "Large Language Models"],
      abstract: "A lightweight vision-language bridge that bootstraps frozen image encoders and large language models.",
      url: "https://arxiv.org/abs/2301.12597",
      source: "演示数据",
      addedAt: "2026-09-15",
    },
    {
      id: "ECCV-2022-002",
      title: "High-Resolution Image Synthesis with Latent Diffusion Models",
      venue: "ECCV",
      year: 2022,
      authors: "Robin Rombach, Andreas Blattmann",
      keywords: ["Diffusion Models", "Generative Models", "Image Synthesis"],
      abstract: "Latent diffusion models provide a compute-efficient route to high-resolution image synthesis.",
      url: "https://arxiv.org/abs/2112.10752",
      source: "演示数据",
      addedAt: "2026-09-15",
    },
    {
      id: "CVPR-2022-001",
      title: "Swin Transformer: Hierarchical Vision Transformer using Shifted Windows",
      venue: "CVPR",
      year: 2022,
      authors: "Ze Liu, Yutong Lin",
      keywords: ["Vision Transformer", "Object Detection", "Image Classification"],
      abstract: "A hierarchical vision transformer that uses shifted windows for efficient local attention.",
      url: "https://arxiv.org/abs/2103.14030",
      source: "演示数据",
      addedAt: "2026-09-14",
    },
    {
      id: "ICCV-2021-001",
      title: "Learning Transferable Visual Models From Natural Language Supervision",
      venue: "ICCV",
      year: 2021,
      authors: "Alec Radford, Jong Wook Kim",
      keywords: ["Vision-Language", "Contrastive Learning", "Representation Learning"],
      abstract: "A contrastive pre-training approach that learns transferable visual concepts from natural language.",
      url: "https://arxiv.org/abs/2103.00020",
      source: "演示数据",
      addedAt: "2026-09-14",
    },
    {
      id: "ECCV-2020-001",
      title: "A Simple Framework for Contrastive Learning of Visual Representations",
      venue: "ECCV",
      year: 2020,
      authors: "Ting Chen, Simon Kornblith",
      keywords: ["Contrastive Learning", "Self-Supervised Learning", "Representation Learning"],
      abstract: "A simple contrastive framework that learns effective visual representations with strong augmentations.",
      url: "https://arxiv.org/abs/2002.05709",
      source: "演示数据",
      addedAt: "2026-09-13",
    },
    {
      id: "CVPR-2024-002",
      title: "PaliGemma: A Versatile 3B VLM for Transfer",
      venue: "CVPR",
      year: 2024,
      authors: "Lucas Beyer, André Susano Pinto",
      keywords: ["Vision-Language", "Multimodal Learning", "Large Language Models"],
      abstract: "A compact vision-language model intended for transfer learning across visual and language tasks.",
      url: "https://arxiv.org/abs/2407.07726",
      source: "演示数据",
      addedAt: "2026-09-12",
    },
    {
      id: "ICCV-2021-002",
      title: "ViTDet: An Empirical Exploration of Plain Vision Transformer Backbones for Object Detection",
      venue: "ICCV",
      year: 2021,
      authors: "Yanghao Li, Hanzi Mao",
      keywords: ["Vision Transformer", "Object Detection", "Transfer Learning"],
      abstract: "An empirical study of plain vision transformer backbones for object detection.",
      url: "https://arxiv.org/abs/2203.16527",
      source: "演示数据",
      addedAt: "2026-09-12",
    },
    {
      id: "ECCV-2024-002",
      title: "Gaussian Splatting for Real-Time Radiance Field Rendering",
      venue: "ECCV",
      year: 2024,
      authors: "Bernhard Kerbl, Georgios Kopanas",
      keywords: ["3D Vision", "Neural Rendering", "Scene Reconstruction"],
      abstract: "A radiance field representation based on 3D Gaussian primitives for real-time rendering.",
      url: "https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/",
      source: "演示数据",
      addedAt: "2026-09-11",
    },
    {
      id: "CVPR-2023-002",
      title: "BLIP: Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation",
      venue: "CVPR",
      year: 2023,
      authors: "Junnan Li, Dongxu Li",
      keywords: ["Vision-Language", "Multimodal Learning", "Image Captioning"],
      abstract: "A unified vision-language pre-training framework for understanding and generation tasks.",
      url: "https://arxiv.org/abs/2201.12086",
      source: "演示数据",
      addedAt: "2026-09-11",
    },
    {
      id: "ICCV-2023-003",
      title: "Mask2Former for Universal Image Segmentation",
      venue: "ICCV",
      year: 2023,
      authors: "Bowen Cheng, Ishan Misra",
      keywords: ["Segmentation", "Transformer", "Object Detection"],
      abstract: "A universal architecture for semantic, instance, and panoptic segmentation.",
      url: "https://arxiv.org/abs/2112.01527",
      source: "演示数据",
      addedAt: "2026-09-10",
    },
    {
      id: "ECCV-2020-002",
      title: "RAFT: Recurrent All-Pairs Field Transforms for Optical Flow",
      venue: "ECCV",
      year: 2020,
      authors: "Zachary Teed, Jia Deng",
      keywords: ["Optical Flow", "Video Understanding", "Representation Learning"],
      abstract: "A recurrent all-pairs field transform for accurate and efficient optical flow estimation.",
      url: "https://arxiv.org/abs/2003.12039",
      source: "演示数据",
      addedAt: "2026-09-10",
    },
  ];

  const state = {
    papers: loadPapers(),
    currentView: "dashboard",
    currentKeyword: "",
    trendKeyword: "",
    trendVenue: "all",
    trendYear: null,
    trendTimer: null,
    onlinePaper: null,
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function loadPapers() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(saved) && saved.length) {
        return saved.map((paper, index) => normalizePaper(paper, index));
      }
    } catch (error) {
      console.warn("Unable to load local data", error);
    }
    return SEED_PAPERS.map((paper, index) => normalizePaper(paper, index));
  }

  function savePapers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.papers));
    const syncTime = $("#sidebar-sync-time");
    if (syncTime) syncTime.textContent = `本地已保存 · ${formatDate(new Date())}`;
  }

  function normalizePaper(raw, index = 0) {
    const keywords = normalizeKeywords(raw.keywords || raw.keyword);
    const title = String(raw.title || raw.name || "未命名论文").trim();
    const venue = ["CVPR", "ICCV", "ECCV"].includes(String(raw.venue).toUpperCase())
      ? String(raw.venue).toUpperCase()
      : "CVPR";
    const year = Number.parseInt(raw.year, 10) || new Date().getFullYear();
    return {
      id: String(raw.id || `${venue}-${year}-${String(index + 1).padStart(3, "0")}`),
      title,
      venue,
      year,
      authors: String(raw.authors || raw.author || "未提供"),
      keywords: keywords.length ? keywords : ["未分类"],
      abstract: String(raw.abstract || "暂无摘要，欢迎在论文管理中补充。"),
      url: safeUrl(raw.url || raw.link || ""),
      source: String(raw.source || "本地导入"),
      addedAt: raw.addedAt || formatDate(new Date()),
    };
  }

  function normalizeKeywords(value) {
    if (Array.isArray(value)) {
      return value.map((item) => String(item).trim()).filter(Boolean).slice(0, 12);
    }
    return String(value || "")
      .split(/[,，;；|]/)
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 12);
  }

  function formatDate(value) {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return "2026-09-21";
    return date.toISOString().slice(0, 10);
  }

  function safeUrl(value) {
    const url = String(value || "").trim();
    return /^https?:\/\//i.test(url) ? url : "";
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function getKeywordStats(papers = state.papers) {
    const stats = new Map();
    papers.forEach((paper) => {
      paper.keywords.forEach((keyword) => {
        const key = keyword.trim();
        if (!key) return;
        stats.set(key, (stats.get(key) || 0) + 1);
      });
    });
    return Array.from(stats.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }

  function getYears(papers = state.papers) {
    return Array.from(new Set(papers.map((paper) => Number(paper.year)).filter(Boolean))).sort((a, b) => a - b);
  }

  function getCount(papers, predicate) {
    return papers.filter(predicate).length;
  }

  function toast(message, type = "success") {
    const region = $("#toast-region");
    const item = document.createElement("div");
    item.className = `toast${type === "error" ? " is-error" : ""}`;
    item.innerHTML = `<i data-lucide="${type === "error" ? "circle-alert" : "circle-check"}" aria-hidden="true"></i><span>${escapeHtml(message)}</span>`;
    region.appendChild(item);
    refreshIcons();
    window.setTimeout(() => item.remove(), 3600);
  }

  function navigate(view) {
    if (!VIEW_NAMES[view]) return;
    state.currentView = view;
    $$(".page-view").forEach((section) => section.classList.toggle("is-visible", section.id === `view-${view}`));
    $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
    $("#breadcrumb-current").textContent = VIEW_NAMES[view];
    $("#sidebar").classList.remove("is-open");
    if (view === "papers") renderPaperTable();
    if (view === "trends") renderTrendView();
    refreshIcons();
  }

  function renderAll() {
    $("#nav-paper-count").textContent = state.papers.length;
    renderDashboard();
    populateYearFilter();
    renderPaperTable();
    renderTrendView();
    refreshIcons();
  }

  function renderDashboard() {
    const stats = getKeywordStats();
    const years = getYears();
    const venues = new Set(state.papers.map((paper) => paper.venue));
    const topKeyword = stats[0]?.name || "暂无";
    const statItems = [
      { label: "PAPERS INDEXED", value: state.papers.length, caption: "当前论文库规模", icon: "files", color: "coral" },
      { label: "CONFERENCES", value: venues.size, caption: "CVPR / ICCV / ECCV", icon: "layers-3", color: "blue" },
      { label: "TOP KEYWORD", value: topKeyword, caption: stats[0] ? `${stats[0].count} 篇论文涉及` : "等待导入数据", icon: "trending-up", color: "mint", text: true },
      { label: "DATA COVERAGE", value: years.length ? `${years[0]}—${years[years.length - 1]}` : "—", caption: `${years.length} 个年度切片`, icon: "calendar-range", color: "gold", text: true },
    ];
    $("#stat-grid").innerHTML = statItems
      .map(
        (item) => `
          <article class="stat-card">
            <div class="stat-card-top">
              <span class="stat-card-label">${item.label}</span>
              <span class="stat-card-icon ${item.color}"><i data-lucide="${item.icon}" aria-hidden="true"></i></span>
            </div>
            <div class="stat-card-value${item.text ? " text-value" : ""}" title="${escapeHtml(item.value)}">${escapeHtml(item.value)}</div>
            <div class="stat-card-caption">${escapeHtml(item.caption)}</div>
          </article>
        `,
      )
      .join("");

    renderSmallTrendChart();
    renderInsight(stats);
    renderRanking(stats);
    renderKeywordCloud(stats);
    renderRecentPapers();
  }

  function renderSmallTrendChart() {
    const years = getYears();
    const series = ["CVPR", "ICCV", "ECCV"].map((venue, index) => ({
      key: venue,
      label: venue,
      className: ["coral", "blue", "green"][index],
      values: Object.fromEntries(years.map((year) => [year, getCount(state.papers, (paper) => paper.venue === venue && paper.year === year)])),
    }));
    renderLineChart($("#dashboard-trend-chart"), series, { small: true });
  }

  function renderInsight(stats) {
    const top = stats[0]?.name || "视觉研究";
    const second = stats[1]?.name || "多模态学习";
    const topCount = stats[0]?.count || 0;
    const latestYear = Math.max(...getYears(), 2025);
    const latestCount = getCount(state.papers, (paper) => paper.year === latestYear);
    const previousCount = getCount(state.papers, (paper) => paper.year === latestYear - 1);
    const direction = latestCount >= previousCount ? "增长" : "回落";
    $("#insight-content").innerHTML = `
      <p class="insight-headline"><em>${escapeHtml(top)}</em> 正在成为样本库里的第一关键词。</p>
      <p class="insight-copy">当前共有 ${topCount} 篇论文涉及 ${escapeHtml(top)}，其次是 ${escapeHtml(second)}。${latestYear} 年收录 ${latestCount} 篇，较上一切片呈现${direction}趋势。</p>
      <div class="insight-footer"><span>统计模型 · 关键词频次</span><span>UPDATED ${formatDate(new Date())}</span></div>
    `;
  }

  function renderRanking(stats) {
    const topTen = stats.slice(0, 10);
    const max = topTen[0]?.count || 1;
    $("#ranking-list").innerHTML = topTen.length
      ? topTen
          .map(
            (item, index) => `
              <button class="ranking-row" data-keyword-filter="${escapeHtml(item.name)}" title="筛选 ${escapeHtml(item.name)}">
                <span class="ranking-index">${String(index + 1).padStart(2, "0")}</span>
                <span class="ranking-name">${escapeHtml(item.name)}</span>
                <span class="ranking-bar-wrap"><span class="ranking-bar" style="width:${Math.max(10, (item.count / max) * 100)}%"></span></span>
                <span class="ranking-count">${item.count}</span>
              </button>
            `,
          )
          .join("")
      : `<p class="muted-note">暂无关键词数据，请先导入论文。</p>`;
  }

  function renderKeywordCloud(stats) {
    const tags = stats.slice(0, 14);
    const positions = [
      [6, 25, 22], [34, 10, 17], [64, 26, 15], [17, 59, 14], [50, 58, 13], [77, 56, 12],
      [7, 82, 11], [37, 83, 11], [67, 82, 10], [80, 12, 10], [25, 37, 10], [56, 8, 10],
      [42, 35, 9], [69, 39, 9],
    ];
    const max = tags[0]?.count || 1;
    $("#keyword-cloud").innerHTML = tags.length
      ? tags
          .map((tag, index) => {
            const position = positions[index] || [Math.random() * 72 + 5, Math.random() * 70 + 8, 9];
            const size = Math.round(9 + (tag.count / max) * 9);
            return `<button class="cloud-tag" data-keyword-filter="${escapeHtml(tag.name)}" style="left:${position[0]}%;top:${position[1]}%;font-size:${size}px">${escapeHtml(tag.name)}</button>`;
          })
          .join("")
      : `<p class="muted-note">暂无关键词图谱。</p>`;
  }

  function renderRecentPapers() {
    const recent = [...state.papers].sort((a, b) => String(b.addedAt).localeCompare(String(a.addedAt))).slice(0, 5);
    $("#recent-papers").innerHTML = recent
      .map(
        (paper) => `
          <tr>
            <td class="paper-title-cell">
              <a class="paper-title-link" href="${escapeHtml(paper.url || "#")}" ${paper.url ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(paper.title)}</a>
              <span class="paper-id">${escapeHtml(paper.id)}</span>
            </td>
            <td><span class="venue-badge venue-${paper.venue}">${paper.venue}</span></td>
            <td><span class="year-text">${paper.year}</span></td>
            <td><div class="keyword-list">${paper.keywords.slice(0, 2).map((keyword) => `<span class="keyword-chip">${escapeHtml(keyword)}</span>`).join("")}</div></td>
            <td><span class="source-label"><i data-lucide="database" aria-hidden="true"></i>${escapeHtml(paper.source)}</span></td>
          </tr>
        `,
      )
      .join("");
  }

  function renderLineChart(container, series, options = {}) {
    if (!container) return;
    const allYears = Array.from(new Set(series.flatMap((item) => Object.keys(item.values).map(Number)))).sort((a, b) => a - b);
    if (!allYears.length) {
      container.innerHTML = `<div class="empty-state"><p>导入数据后显示趋势图。</p></div>`;
      return;
    }
    const width = 820;
    const height = options.small ? 180 : 310;
    const margin = options.small ? { top: 12, right: 15, bottom: 28, left: 28 } : { top: 15, right: 25, bottom: 38, left: 42 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const maxValue = Math.max(1, ...series.flatMap((item) => Object.values(item.values).map(Number)));
    const x = (year) => margin.left + (allYears.indexOf(year) / Math.max(1, allYears.length - 1)) * plotWidth;
    const y = (value) => margin.top + plotHeight - (Number(value) / maxValue) * plotHeight;
    const yTicks = options.small ? 3 : 4;
    const grid = Array.from({ length: yTicks + 1 }, (_, index) => {
      const value = Math.round((maxValue / yTicks) * index);
      const yPos = y(value);
      return `<line class="chart-grid-line" x1="${margin.left}" x2="${width - margin.right}" y1="${yPos}" y2="${yPos}"></line><text class="chart-axis-label" x="${margin.left - 8}" y="${yPos + 3}" text-anchor="end">${value}</text>`;
    }).join("");
    const labels = allYears.map((year) => `<text class="chart-axis-label" x="${x(year)}" y="${height - 8}" text-anchor="middle">${year}</text>`).join("");
    const paths = series
      .map((item) => {
        const points = allYears.map((year) => [x(year), y(item.values[year] || 0)]);
        const path = points.map(([xPos, yPos], index) => `${index ? "L" : "M"} ${xPos.toFixed(1)} ${yPos.toFixed(1)}`).join(" ");
        const area = `${path} L ${x(allYears[allYears.length - 1]).toFixed(1)} ${y(0).toFixed(1)} L ${x(allYears[0]).toFixed(1)} ${y(0).toFixed(1)} Z`;
        const pointsMarkup = points
          .map(([xPos, yPos], index) => `<circle class="chart-point point-${item.className}" cx="${xPos}" cy="${yPos}" r="${options.small ? 3 : 4}" data-year="${allYears[index]}" data-value="${item.values[allYears[index]] || 0}"></circle>`)
          .join("");
        const animated = options.animated ? " is-animated" : "";
        return `<path class="chart-area area-${item.className}" d="${area}"></path><path class="chart-line line-${item.className}${animated}" d="${path}"></path>${pointsMarkup}`;
      })
      .join("");
    container.innerHTML = `<svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="年度趋势图"><g>${grid}</g><g>${paths}</g><g>${labels}</g></svg>`;
  }

  function populateYearFilter() {
    const select = $("#paper-year-filter");
    const selected = select.value;
    const years = getYears();
    select.innerHTML = `<option value="all">全部年份</option>${years.map((year) => `<option value="${year}">${year}</option>`).join("")}`;
    select.value = years.includes(Number(selected)) ? selected : "all";
  }

  function getFilteredPapers() {
    const query = ($("#paper-search")?.value || state.currentKeyword).trim().toLowerCase();
    const venue = $("#paper-venue-filter")?.value || "all";
    const year = $("#paper-year-filter")?.value || "all";
    return state.papers
      .filter((paper) => {
        const haystack = [paper.id, paper.title, paper.authors, paper.abstract, ...paper.keywords].join(" ").toLowerCase();
        return (!query || haystack.includes(query)) && (venue === "all" || paper.venue === venue) && (year === "all" || String(paper.year) === year);
      })
      .sort((a, b) => Number(b.year) - Number(a.year) || String(b.addedAt).localeCompare(String(a.addedAt)));
  }

  function renderPaperTable() {
    const filtered = getFilteredPapers();
    const body = $("#papers-table-body");
    const empty = $("#paper-empty-state");
    const table = $(".paper-table-panel .table-wrap");
    $("#paper-result-summary").textContent = `显示 ${filtered.length} / ${state.papers.length} 篇论文`;
    body.innerHTML = filtered
      .map(
        (paper) => `
          <tr>
            <td class="check-cell"><input type="checkbox" aria-label="选择 ${escapeHtml(paper.title)}" data-paper-check="${escapeHtml(paper.id)}" /></td>
            <td class="paper-title-cell">
              <a class="paper-title-link" href="${escapeHtml(paper.url || "#")}" ${paper.url ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(paper.title)}</a>
              <span class="paper-id">${escapeHtml(paper.id)} · ${escapeHtml(paper.authors)}</span>
            </td>
            <td><span class="venue-badge venue-${paper.venue}">${paper.venue}</span><span class="year-text">${paper.year}</span></td>
            <td><div class="keyword-list">${paper.keywords.slice(0, 4).map((keyword) => `<span class="keyword-chip">${escapeHtml(keyword)}</span>`).join("")}</div></td>
            <td><span class="source-label"><i data-lucide="${paper.source === "在线检索" ? "globe-2" : "database"}" aria-hidden="true"></i>${escapeHtml(paper.source)}</span></td>
            <td class="action-cell"><div class="row-actions"><button class="icon-button" data-edit-paper="${escapeHtml(paper.id)}" title="编辑论文" aria-label="编辑论文"><i data-lucide="pencil" aria-hidden="true"></i></button><button class="icon-button" data-delete-paper="${escapeHtml(paper.id)}" title="删除论文" aria-label="删除论文"><i data-lucide="trash-2" aria-hidden="true"></i></button></div></td>
          </tr>
        `,
      )
      .join("");
    const hasResults = filtered.length > 0;
    table.classList.toggle("is-hidden", !hasResults);
    empty.classList.toggle("is-hidden", hasResults);
    refreshIcons();
  }

  function renderTrendView() {
    const stats = getKeywordStats();
    const keywordSelect = $("#trend-keyword");
    const previous = state.trendKeyword;
    if (!state.trendKeyword || !stats.some((item) => item.name === state.trendKeyword)) {
      state.trendKeyword = stats[0]?.name || "";
    }
    keywordSelect.innerHTML = stats.length
      ? stats.slice(0, 20).map((item) => `<option value="${escapeHtml(item.name)}">${escapeHtml(item.name)}</option>`).join("")
      : `<option value="">暂无关键词</option>`;
    keywordSelect.value = stats.some((item) => item.name === previous) ? previous : state.trendKeyword;
    $("#trend-venue").value = state.trendVenue;
    renderTrendChart();
    renderHeatmap(stats.slice(0, 8));
  }

  function renderTrendChart() {
    const years = getYears();
    const keyword = state.trendKeyword;
    const venues = state.trendVenue === "all" ? ["CVPR", "ICCV", "ECCV"] : [state.trendVenue];
    const classes = { CVPR: "coral", ICCV: "blue", ECCV: "green" };
    const series = venues.map((venue) => ({
      key: venue,
      label: venue,
      className: classes[venue],
      values: Object.fromEntries(
        years.map((year) => [
          year,
          getCount(state.papers, (paper) => paper.venue === venue && paper.year === year && paper.keywords.includes(keyword)),
        ]),
      ),
    }));
    renderLineChart($("#large-trend-chart"), series, { animated: Boolean(state.trendTimer) });
    $("#trend-chart-title").textContent = keyword ? `${keyword} · 年度热度` : "关键词年度热度";
    $("#trend-legend").innerHTML = series
      .map((item) => `<span><i class="legend-dot dot-${item.className}"></i>${item.label}</span>`)
      .join("");
    const currentYear = state.trendYear || years[years.length - 1] || new Date().getFullYear();
    const total = series.reduce((sum, item) => sum + Number(item.values[currentYear] || 0), 0);
    $("#trend-year-readout").textContent = currentYear;
    $("#trend-score-readout").textContent = total;
    $("#animation-status").classList.toggle("is-playing", Boolean(state.trendTimer));
    $("#animation-status").innerHTML = `<span></span>${state.trendTimer ? "播放中 · 年份切换" : "静态预览"}`;
    refreshIcons();
  }

  function renderHeatmap(stats) {
    const years = getYears().slice(-4);
    const max = Math.max(1, ...stats.flatMap((item) => years.map((year) => getCount(state.papers, (paper) => paper.year === year && paper.keywords.includes(item.name)))));
    const header = `<div class="heatmap-row"><span></span>${years.map((year) => `<span class="heatmap-year">${year}</span>`).join("")}</div>`;
    const rows = stats
      .map((item) => {
        const cells = years
          .map((year) => {
            const value = getCount(state.papers, (paper) => paper.year === year && paper.keywords.includes(item.name));
            const alpha = value ? 0.12 + (value / max) * 0.78 : 0.08;
            return `<span class="heatmap-cell" style="background:rgba(239,118,93,${alpha});color:${value / max > 0.5 ? "#fff" : "#8d5145"}">${value || "—"}</span>`;
          })
          .join("");
        return `<div class="heatmap-row"><span class="heatmap-label">${escapeHtml(item.name)}</span>${cells}</div>`;
      })
      .join("");
    $("#keyword-heatmap").innerHTML = stats.length ? header + rows : `<p class="muted-note">暂无热词数据。</p>`;
  }

  function openPaperModal(id = "") {
    const paper = state.papers.find((item) => item.id === id);
    $("#paper-form").reset();
    $("#paper-id").value = paper?.id || "";
    $("#modal-title").textContent = paper ? "编辑论文" : "新增论文";
    $("#modal-kicker").textContent = paper ? "EDIT PAPER RECORD" : "NEW PAPER RECORD";
    $("#paper-title").value = paper?.title || "";
    $("#paper-venue").value = paper?.venue || "CVPR";
    $("#paper-year").value = paper?.year || 2025;
    $("#paper-keywords").value = paper?.keywords?.join(", ") || "";
    $("#paper-authors").value = paper?.authors === "未提供" ? "" : paper?.authors || "";
    $("#paper-url").value = paper?.url || "";
    $("#paper-abstract").value = paper?.abstract || "";
    $("#paper-modal").classList.remove("is-hidden");
    window.setTimeout(() => $("#paper-title").focus(), 50);
  }

  function closePaperModal() {
    $("#paper-modal").classList.add("is-hidden");
  }

  function submitPaperForm(event) {
    event.preventDefault();
    const id = $("#paper-id").value.trim();
    const paper = normalizePaper({
      id: id || undefined,
      title: $("#paper-title").value,
      venue: $("#paper-venue").value,
      year: $("#paper-year").value,
      keywords: $("#paper-keywords").value,
      authors: $("#paper-authors").value,
      url: $("#paper-url").value,
      abstract: $("#paper-abstract").value,
      source: id ? state.papers.find((item) => item.id === id)?.source || "本地编辑" : "本地新增",
      addedAt: id ? state.papers.find((item) => item.id === id)?.addedAt : formatDate(new Date()),
    }, state.papers.length);
    if (state.papers.some((item) => item.title.toLowerCase() === paper.title.toLowerCase() && item.id !== id)) {
      toast("论文题目已存在，请检查后再保存。", "error");
      return;
    }
    if (id) {
      const index = state.papers.findIndex((item) => item.id === id);
      state.papers[index] = paper;
      toast("论文信息已更新。");
    } else {
      state.papers.unshift(paper);
      toast("论文已添加到本地论文库。");
    }
    savePapers();
    closePaperModal();
    renderAll();
  }

  function deletePaper(id) {
    const paper = state.papers.find((item) => item.id === id);
    if (!paper) return;
    if (!window.confirm(`确认删除《${paper.title}》吗？`)) return;
    state.papers = state.papers.filter((item) => item.id !== id);
    savePapers();
    renderAll();
    toast("论文已删除。");
  }

  function parseCSV(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;
    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const next = text[index + 1];
      if (char === '"' && quoted && next === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        row.push(cell.trim());
        cell = "";
      } else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") index += 1;
        row.push(cell.trim());
        if (row.some(Boolean)) rows.push(row);
        row = [];
        cell = "";
      } else {
        cell += char;
      }
    }
    if (cell || row.length) {
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
    }
    if (rows.length < 2) return [];
    const headers = rows[0].map((header) => header.trim().toLowerCase());
    return rows.slice(1).map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] || ""])));
  }

  function importTextContent(text) {
    const trimmed = text.trim();
    if (!trimmed) {
      toast("请先选择文件或粘贴 JSON / CSV 内容。", "error");
      return;
    }
    let parsed;
    try {
      parsed = trimmed.startsWith("[") || trimmed.startsWith("{") ? JSON.parse(trimmed) : parseCSV(trimmed);
      if (!Array.isArray(parsed)) parsed = [parsed];
    } catch (error) {
      toast("文件格式无法解析，请检查 JSON 或 CSV 语法。", "error");
      return;
    }
    const normalized = parsed.map((item, index) => normalizePaper(item, state.papers.length + index));
    const existingTitles = new Set(state.papers.map((paper) => paper.title.toLowerCase()));
    const fresh = normalized.filter((paper) => !existingTitles.has(paper.title.toLowerCase()));
    state.papers = [...fresh, ...state.papers];
    savePapers();
    renderAll();
    navigate("papers");
    toast(`导入完成：新增 ${fresh.length} 篇，跳过 ${normalized.length - fresh.length} 篇重复论文。`);
    $("#import-text").value = "";
  }

  function showOnlineResult(paper, isLocal = false) {
    state.onlinePaper = paper;
    const result = $("#online-search-result");
    result.classList.remove("is-hidden");
    result.innerHTML = `
      <h4>${escapeHtml(paper.title)}</h4>
      <p>${escapeHtml(paper.authors || "作者信息暂无")} · ${escapeHtml(String(paper.year || "年份未知"))}</p>
      <p>${escapeHtml(paper.abstract || "接口未返回摘要，可在保存后补充。")}</p>
      <button class="button button-${isLocal ? "ghost" : "primary"}" data-add-online-paper="${escapeHtml(paper.id || "")}"><i data-lucide="${isLocal ? "external-link" : "plus"}" aria-hidden="true"></i>${isLocal ? "在论文管理中查看" : "加入本地论文库"}</button>
    `;
    refreshIcons();
  }

  async function runOnlineSearch() {
    const input = $("#online-search-input");
    const query = input.value.trim();
    if (!query) {
      toast("请输入论文题目后再检索。", "error");
      input.focus();
      return;
    }
    const local = state.papers.find((paper) => paper.title.toLowerCase() === query.toLowerCase());
    if (local) {
      showOnlineResult(local, true);
      toast("本地论文库已找到完全匹配的论文。");
      return;
    }
    const button = $("#run-online-search");
    button.disabled = true;
    button.innerHTML = `<i data-lucide="loader-circle" aria-hidden="true"></i>检索中...`;
    refreshIcons();
    try {
      const response = await fetch(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&per-page=1`);
      if (!response.ok) throw new Error("OpenAlex request failed");
      const data = await response.json();
      const work = data.results?.[0];
      if (!work) {
        toast("公开接口没有返回结果，可以尝试更短的题目关键词。", "error");
        return;
      }
      const paper = normalizePaper({
        title: work.title,
        year: work.publication_year,
        authors: (work.authorships || []).slice(0, 4).map((item) => item.author?.display_name).filter(Boolean).join(", "),
        keywords: (work.keywords || []).map((item) => item.keyword?.display_name).filter(Boolean).slice(0, 6),
        abstract: work.abstract_inverted_index ? reconstructAbstract(work.abstract_inverted_index) : "",
        url: work.primary_location?.landing_page_url || work.doi || "",
        source: "在线检索",
      });
      showOnlineResult(paper);
      toast("已从 OpenAlex 获取论文信息，请确认字段后再保存。");
    } catch (error) {
      toast("联网检索失败，请检查网络，或直接使用批量导入。", "error");
    } finally {
      button.disabled = false;
      button.innerHTML = `<i data-lucide="search" aria-hidden="true"></i>开始检索`;
      refreshIcons();
    }
  }

  function reconstructAbstract(invertedIndex) {
    const words = [];
    Object.entries(invertedIndex || {}).forEach(([word, positions]) => {
      positions.forEach((position) => {
        words[position] = word;
      });
    });
    return words.filter(Boolean).join(" ");
  }

  function addOnlinePaper() {
    if (!state.onlinePaper) return;
    const paper = normalizePaper({ ...state.onlinePaper, id: undefined, source: "在线检索" }, state.papers.length);
    const existing = state.papers.some((item) => item.title.toLowerCase() === paper.title.toLowerCase());
    if (existing) {
      toast("这篇论文已经在本地论文库中。", "error");
      return;
    }
    state.papers.unshift(paper);
    savePapers();
    renderAll();
    toast("在线论文已加入本地论文库。");
  }

  function downloadFile(filename, content, type = "application/json") {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportPapers() {
    downloadFile("visionpulse-papers.json", JSON.stringify(state.papers, null, 2));
    toast("论文数据已导出。");
  }

  function startTrendPlayback() {
    const years = getYears();
    if (years.length < 2) {
      toast("至少需要两个年份的数据才能播放趋势。", "error");
      return;
    }
    if (state.trendTimer) {
      window.clearInterval(state.trendTimer);
      state.trendTimer = null;
      $("#play-trend").innerHTML = `<i data-lucide="play" aria-hidden="true"></i><span>播放趋势</span>`;
      renderTrendChart();
      refreshIcons();
      return;
    }
    let index = 0;
    state.trendYear = years[index];
    state.trendTimer = window.setInterval(() => {
      index = (index + 1) % years.length;
      state.trendYear = years[index];
      renderTrendChart();
    }, 1100);
    $("#play-trend").innerHTML = `<i data-lucide="pause" aria-hidden="true"></i><span>暂停播放</span>`;
    renderTrendChart();
    refreshIcons();
  }

  function resetTrend() {
    if (state.trendTimer) {
      window.clearInterval(state.trendTimer);
      state.trendTimer = null;
    }
    state.trendVenue = "all";
    state.trendKeyword = getKeywordStats()[0]?.name || "";
    state.trendYear = null;
    $("#play-trend").innerHTML = `<i data-lucide="play" aria-hidden="true"></i><span>播放趋势</span>`;
    renderTrendView();
    toast("趋势视图已重置。");
  }

  function bindEvents() {
    $$(".nav-item").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.view)));
    $$("[data-view-target]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.viewTarget)));
    $("#mobile-menu").addEventListener("click", () => $("#sidebar").classList.toggle("is-open"));
    $("#open-add-top").addEventListener("click", () => openPaperModal());
    $("#open-add-dashboard").addEventListener("click", () => openPaperModal());
    $("#open-add-papers").addEventListener("click", () => openPaperModal());
    $("#close-paper-modal").addEventListener("click", closePaperModal);
    $("#cancel-paper-modal").addEventListener("click", closePaperModal);
    $("#paper-modal").addEventListener("click", (event) => {
      if (event.target === $("#paper-modal")) closePaperModal();
    });
    $("#paper-form").addEventListener("submit", submitPaperForm);
    $("#paper-search").addEventListener("input", () => {
      state.currentKeyword = "";
      renderPaperTable();
    });
    $("#paper-venue-filter").addEventListener("change", renderPaperTable);
    $("#paper-year-filter").addEventListener("change", renderPaperTable);
    $("#clear-paper-filter").addEventListener("click", () => {
      $("#paper-search").value = "";
      $("#paper-venue-filter").value = "all";
      $("#paper-year-filter").value = "all";
      state.currentKeyword = "";
      renderPaperTable();
    });
    $("#papers-table-body").addEventListener("click", (event) => {
      const editButton = event.target.closest("[data-edit-paper]");
      const deleteButton = event.target.closest("[data-delete-paper]");
      if (editButton) openPaperModal(editButton.dataset.editPaper);
      if (deleteButton) deletePaper(deleteButton.dataset.deletePaper);
    });
    $("#ranking-list").addEventListener("click", (event) => {
      const button = event.target.closest("[data-keyword-filter]");
      if (button) applyKeywordFilter(button.dataset.keywordFilter);
    });
    $("#keyword-cloud").addEventListener("click", (event) => {
      const button = event.target.closest("[data-keyword-filter]");
      if (button) applyKeywordFilter(button.dataset.keywordFilter);
    });
    $("#export-top").addEventListener("click", exportPapers);
    $("#export-papers").addEventListener("click", exportPapers);
    $("#refresh-analysis").addEventListener("click", () => {
      renderAll();
      toast("统计分析已刷新。");
    });
    $("#search-online-top").addEventListener("click", () => {
      const query = $("#paper-search").value.trim();
      navigate("import");
      if (query) {
        $("#online-search-input").value = query;
        runOnlineSearch();
      } else {
        $("#online-search-input").focus();
      }
    });
    $("#search-online-empty").addEventListener("click", () => {
      const query = $("#paper-search").value.trim();
      navigate("import");
      $("#online-search-input").value = query;
      $("#online-search-input").focus();
    });
    $("#choose-file").addEventListener("click", () => $("#file-input").click());
    $("#file-input").addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file) readFile(file);
    });
    $("#dropzone").addEventListener("click", (event) => {
      if (!event.target.closest("button")) $("#file-input").click();
    });
    ["dragenter", "dragover"].forEach((eventName) => $("#dropzone").addEventListener(eventName, (event) => {
      event.preventDefault();
      $("#dropzone").classList.add("is-dragover");
    }));
    ["dragleave", "drop"].forEach((eventName) => $("#dropzone").addEventListener(eventName, (event) => {
      event.preventDefault();
      $("#dropzone").classList.remove("is-dragover");
    }));
    $("#dropzone").addEventListener("drop", (event) => {
      const file = event.dataTransfer.files?.[0];
      if (file) readFile(file);
    });
    $("#run-import").addEventListener("click", () => importTextContent($("#import-text").value));
    $("#load-sample-data").addEventListener("click", () => {
      $("#import-text").value = JSON.stringify(SEED_PAPERS.slice(0, 3), null, 2);
      toast("已填入三条示例数据，可直接导入。");
    });
    $("#run-online-search").addEventListener("click", runOnlineSearch);
    $("#online-search-input").addEventListener("keydown", (event) => {
      if (event.key === "Enter") runOnlineSearch();
    });
    $("#online-search-result").addEventListener("click", (event) => {
      const addButton = event.target.closest("[data-add-online-paper]");
      if (!addButton) return;
      if (state.papers.some((paper) => paper.id === addButton.dataset.addOnlinePaper)) {
        navigate("papers");
      } else {
        addOnlinePaper();
      }
    });
    $("#trend-keyword").addEventListener("change", (event) => {
      state.trendKeyword = event.target.value;
      state.trendYear = null;
      renderTrendChart();
    });
    $("#trend-venue").addEventListener("change", (event) => {
      state.trendVenue = event.target.value;
      renderTrendChart();
    });
    $("#play-trend").addEventListener("click", startTrendPlayback);
    $("#reset-trend").addEventListener("click", resetTrend);
    $("#reset-data").addEventListener("click", () => {
      if (!window.confirm("确认恢复演示数据吗？当前本地论文库会被覆盖。")) return;
      state.papers = SEED_PAPERS.map((paper, index) => normalizePaper(paper, index));
      savePapers();
      renderAll();
      toast("演示数据已恢复。");
    });
    $("#select-all-papers").addEventListener("change", (event) => {
      $$("[data-paper-check]").forEach((checkbox) => {
        checkbox.checked = event.target.checked;
      });
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        navigate("papers");
        $("#paper-search").focus();
      }
      if (event.key === "Escape") {
        closePaperModal();
        $("#sidebar").classList.remove("is-open");
      }
    });
  }

  function applyKeywordFilter(keyword) {
    state.currentKeyword = keyword;
    navigate("papers");
    $("#paper-search").value = keyword;
    renderPaperTable();
    toast(`已筛选关键词：${keyword}`);
  }

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      $("#selected-file").textContent = file.name;
      $("#import-text").value = String(reader.result || "");
      toast(`已读取 ${file.name}，确认内容后点击导入。`);
    };
    reader.onerror = () => toast("文件读取失败，请重新选择。", "error");
    reader.readAsText(file, "utf-8");
  }

  // Initialize the static app and keep every derived view synchronized.
  bindEvents();
  renderAll();
  navigate("dashboard");
})();
