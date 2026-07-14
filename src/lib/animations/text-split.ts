"use client";

export function splitTextIntoSpans(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";
  const spans: HTMLSpanElement[] = [];

  for (const char of text) {
    const span = document.createElement("span");
    span.className = "inline-block";
    span.textContent = char === " " ? "\u00A0" : char;
    element.appendChild(span);
    spans.push(span);
  }

  return spans;
}

export function splitWordsIntoSpans(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";
  const words = text.split(/(\s+)/);
  const spans: HTMLSpanElement[] = [];

  for (const word of words) {
    const span = document.createElement("span");
    span.className = "inline-block";
    if (word.match(/^\s+$/)) {
      span.textContent = "\u00A0";
    } else {
      span.textContent = word;
    }
    element.appendChild(span);
    spans.push(span);
  }

  return spans;
}
