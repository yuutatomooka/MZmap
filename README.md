# MZMap: Google Maps Heatmap Visualization (CSV → HeatmapLayer)

MZMap は、Google Maps JavaScript API の **HeatmapLayer（visualization library）** を利用し、CSV データに含まれる緯度・経度情報をヒートマップとして可視化する軽量な Web アプリケーションです。

本プロジェクトは、2020年度 [JICA-高専オープンイノベーションチャレンジ](https://www.kosen-oi.com/s-projects-basic) において、モザンビーク共和国ナンプラ州でのプロトタイピング実証に使用されました。

また、本取り組みを含む同チャレンジは  
[第5回日本オープンイノベーション大賞（内閣総理大臣賞）](https://www8.cao.go.jp/cstp/openinnovation/prize/2022.html) を受賞しており、  
本プロジェクトの実証画面は [内閣府公開資料](https://www8.cao.go.jp/cstp/openinnovation/prize/5kai_gaiyo.pdf) にて紹介されています。

---

## 📌 Overview

本システムは以下の処理を実行します。

1. Google Maps を初期化  
2. 外部 CSV ファイルを取得（Google Office Suite との連携を想定）  
3. CSV から `dBm`, `lat`, `lng` を抽出  
4. Google Maps HeatmapLayer 用データへ変換  
5. 地図上にヒートマップとして描画  

---

## 🗺️ 地図設定

- **Center:** `lat: 33.816036`, `lng: 130.872306`
- **Zoom:** `11`
- **Library:** `libraries=visualization`

---

## 📂 CSV仕様（前提条件）

本コードは、以下の列構造を前提としています。

| 列 Index | 内容 |
|-----------|------|
| 6         | dBm（電波強度） |
| 13        | 緯度 (latitude) |
| 14        | 経度 (longitude) |

さらに、**先頭12行をスキップする仕様**になっています。

```javascript
for (var i = 12; i < responses.length; i++)
```

CSV の構造が異なる場合は、該当インデックスを調整してください。

---

## 🔥 Weight ロジック

```javascript
if (formattedReponses[i][6] < 0) {
  cover_point.weight = 1;
}
```

現在の実装では：

- `dBm < 0` の場合のみ `weight = 1`
- それ以外は weight 未設定

より精度の高いヒートマップを構築する場合は、  
`dBm` を正規化（例：-120〜-40 の範囲を 0〜1 に変換）して連続値として使用することを推奨します。

---

## ⚙️ セットアップ方法

### 1️⃣ Google Maps APIキーの取得

1. Google Cloud Console で API キーを発行  
2. Maps JavaScript API を有効化  
3. HTTP リファラ制限を設定  
4. 以下のスクリプト部分にキーを設定  

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization"></script>
```

⚠ 公開リポジトリに API キーを直接記載することは推奨されません。

---

### 2️⃣ index.html として保存

コードを `index.html` として保存し、ブラウザで開いてください。

---

## 🚨 注意事項

### 1️⃣ id 重複禁止
HTML 内で `id="map"` は一意である必要があります。

### 2️⃣ CORS 設定
CSV 配信サーバは以下のヘッダを許可している必要があります。

```
Access-Control-Allow-Origin
Access-Control-Allow-Credentials
```

### 3️⃣ APIキー漏洩対策

- リファラ制限を設定
- API 制限を設定
- 可能であればバックエンド経由で API キーを管理

---

## 🔧 技術改善提案

- `XMLHttpRequest` を `fetch()` に置き換え
- CSV パーサー（例：PapaParse）の導入
- dBm の連続値正規化
- エラーハンドリング追加
- TypeScript 化
- モジュール分割（Map / Data / Visualization の責務分離）

---

## 📜 License

本プロジェクトは Google Maps API を利用しています。  
利用にあたっては Google Maps Platform 利用規約に従ってください。

---

## 🎯 まとめ

MZMap は、

- 生データ CSV
- Google Maps JavaScript API
- HeatmapLayer

を最小構成で接続し、迅速なフィールド実証を可能にした軽量可視化システムです。

研究・実証用途としては十分機能しますが、  
本番運用にあたってはセキュリティ強化・データ処理最適化・構造化設計への改良が必要です。
