\NeedsTeXFormat{LaTeX2e}
%\ProvidesClass{pfBook}[2013/11/06 pfBook class]
\ProvidesClass{pfBook}[2014/03/22 pfBook class]

% Document meta information
\renewcommand{\title}{The document title}
\newcommand{\subtitle}{The subtitle}
\renewcommand{\author}{The author}
\renewcommand{\copyright}{The copyright notice}

\RequirePackage{ifthen}

% Branding Options
\newboolean{branding}
\setboolean{branding}{true}
\DeclareOption{nobranding}{\setboolean{branding}{false}}

% Language options
\newboolean{german}
\setboolean{german}{false}
\DeclareOption{german}{\setboolean{german}{true}}

% Oneside option
\newboolean{oneside}
\setboolean{oneside}{false}
\DeclareOption{oneside}{\setboolean{oneside}{true}}

% Option handling
\DeclareOption*{\ClassError{pfBook}{Unknown option '\CurrentOption'}}
\ProcessOptions*

% Based on LaTeX class "article"
\ifthenelse{\boolean{oneside}}{
	\LoadClass[a4paper, 11pt, titlepage, oneside]{article}
}{
	\LoadClass[a4paper, 11pt, titlepage, twoside]{article}
}

% mathspec/babel greek characters workaround
\makeatletter
\begingroup\lccode`~=`"
\lowercase{\endgroup
  \everymath{\let~\eu@active@quote}
  \everydisplay{\let~\eu@active@quote}
}
\makeatother

% Set language
\ifthenelse{\boolean{german}}{
	\RequirePackage[english, ngerman]{babel}
}{
	\RequirePackage[ngerman, english]{babel}
}

\RequirePackage{amsfonts}
\RequirePackage{amsmath}
\RequirePackage{amssymb}
\RequirePackage[labelfont=bf, textfont=it]{caption}
\RequirePackage{colortbl}
\RequirePackage{fancyhdr}
\RequirePackage[T1]{fontenc}
\RequirePackage[stable]{footmisc}
\RequirePackage[left=2cm, right=2cm, top=2cm, bottom=2.25cm, includeheadfoot]{geometry}
\RequirePackage{listings}
\RequirePackage{mathspec}
\RequirePackage[olditem,neveradjust]{paralist}
\RequirePackage{pstricks}
\RequirePackage{setspace}
\RequirePackage{tabularx}
\RequirePackage[absolute]{textpos}
\RequirePackage{tikz}
\RequirePackage[nottoc]{tocbibind}
\RequirePackage{watermark}
\RequirePackage{wallpaper}
\RequirePackage{xcolor}

% Define fonts
\setmainfont[Ligatures=TeX]{Liberation Sans}
\setsansfont[Ligatures=TeX]{Liberation Sans}
\setmonofont[Ligatures=TeX]{Liberation Mono}
\setmathfont(Digits,Latin,Greek)[Numbers={Lining,Proportional}]{Liberation Sans}
\setmathrm{Liberation Sans}
\setmathsf{Liberation Sans}
\setmathtt{Liberation Mono}

% Set line spacing
\linespread{1.25}

% Define pfColors
\definecolor{pfColor1}{HTML}{62bd19}
\definecolor{pfColor2}{HTML}{339530}
\definecolor{pfColor3}{HTML}{bce18d}
\definecolor{pfColor4}{HTML}{00625a}

\usepackage[
	pdftitle = {},
	pdfsubject = {},
	pdfauthor = {},
	pdfkeywords = {},
	pdfcreator = {LaTeX},
	pdfproducer = {LaTeX},
	colorlinks = true,
	linkcolor = black,
	anchorcolor = black,
	citecolor = black,
	filecolor = black,
	menucolor = black,
	urlcolor = pfColor2]{hyperref}

% Set document background
\ifthenelse{\boolean{branding}}{
	\ifthenelse{\boolean{oneside}}{
		\watermark{\ThisCenterWallPaper{1.0}{background_page_odd.pdf}}
	}{
		\leftwatermark{\ThisCenterWallPaper{1.0}{background_page_even.pdf}}
		\rightwatermark{\ThisCenterWallPaper{1.0}{background_page_odd.pdf}}
	}
}{}

% Tix
\usetikzlibrary{automata,positioning}
\tikzstyle{every state}=[draw=pfColor2]
\tikzstyle{every edge}=[draw=pfColor2]

\setlength{\TPHorizModule}{\paperwidth}
\setlength{\TPVertModule}{\paperheight}

% Title page
\newcommand{\belowtitle}{}

\newcommand{\maketitlepage}{
	\begin{titlepage}
		\thispagestyle{headers_title}
		\ifthenelse{\boolean{branding}}{\thiswatermark{\ThisCenterWallPaper{1.0}{background_title.pdf}}}{}
		\begin{center}
			\vspace*{0.25cm}
			\Huge{\textbf{\title}}
			
			\vspace*{0.5cm}
			\LARGE{\subtitle}
			
			\vspace*{1.5cm}
			\Large{\author}
		\end{center}
		\vspace*{3cm}
		\belowtitle
		
		\begin{textblock}{1.0}(0,0.9025)
			\centering\copyright
		\end{textblock}
	\end{titlepage}
}

% Itemize, Enumerate
\setlength{\plpartopsep}{1.5ex}
\renewenvironment{itemize}[1][]{
	\ifthenelse{\equal{#1}{}}{\begin{compactitem}[\color{pfColor2}\textbullet]}{\begin{compactitem}[\color{pfColor2}#1]}
}{
	\end{compactitem}
}
\renewenvironment{enumerate}[1][]{
	\ifthenelse{\equal{#1}{}}{\begin{compactenum}[\color{pfColor2}1.]}{\begin{compactenum}[\color{pfColor2}#1]}
}{
	\end{compactenum}
}

% Tables
\renewcommand{\arraystretch}{1.5}
\arrayrulecolor{pfColor2}
\setlength{\arrayrulewidth}{0.5pt}
\newcolumntype{L}{>{\raggedright\arraybackslash}X}
\newcolumntype{C}{>{\centering\arraybackslash}X}
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}

% Listings
\definecolor{comments}{HTML}{888888}
\lstdefinestyle{shell}{
	backgroundcolor		= \color{black},
	basicstyle			= \footnotesize\ttfamily\color{white},
	captionpos			= b,
	numbers				= left,
	numberstyle			= \scriptsize\color{comments}\ttfamily,
	sensitive			= false,
	showstringspaces	= false,
	tabsize				= 4,
	xleftmargin			= 3 em
}
\lstdefinestyle{java}{
	language			= java,
	basicstyle			= \footnotesize\ttfamily,
	captionpos			= b,
	commentstyle		= \itshape\color{comments},
	keywordstyle		= \bfseries\color{pfColor2},
	numbers				= left,
	numberstyle			= \scriptsize\color{comments}\ttfamily,
	sensitive			= false,
	stringstyle			= \color{pfColor4},
	showstringspaces	= false,
	tabsize				= 4,
	xleftmargin			= 3 em
}
\lstdefinestyle{php}{
	language			= php,
	morekeywords		= {class, declare, function, include_once, new, null, private, protected, public, require_once, return, throw, var},
	basicstyle			= \footnotesize\ttfamily,
	captionpos			= b,
	commentstyle		= \itshape\color{comments},
	keywordstyle		= \bfseries\color{pfColor2},
	numbers				= left,
	numberstyle			= \scriptsize\color{comments}\ttfamily,
	sensitive			= false,
	stringstyle			= \color{pfColor4},
	showstringspaces	= false,
	tabsize				= 4,
	xleftmargin			= 3 em
}

% Table of contents
\newcommand{\maketableofcontents}{
	\tableofcontents
}

% Define page headers
\fancypagestyle{headers_title}{
	\lhead{}
	\chead{}
	\rhead{}
	\lfoot{}
	\cfoot{\vspace{0.225cm}\includegraphics[width=4.0cm]{logo.pdf}}
	\rfoot{}
	\renewcommand{\headrulewidth}{0pt}
	\renewcommand{\footrulewidth}{0.5pt}
}
\fancypagestyle{headers_page}{
	\lhead[\thepage]{\leftmark}
	\chead{}
	\rhead[\rightmark]{\thepage}
	\lfoot{}
	\cfoot{\vspace{0.225cm}\includegraphics[width=4.0cm]{logo.pdf}}
	\rfoot{}
	\renewcommand{\headrulewidth}{0.5pt}
	\renewcommand{\footrulewidth}{0.5pt}
}
\pagestyle{headers_page}

% List of figures, tables, listings
\newcommand{\makelistoffigures}{
	\listoffigures
}
\newcommand{\makelistoftables}{
	\listoftables
}
\newcommand{\makelistoflistings}{
	\lstlistoflistings
	\addcontentsline{toc}{section}{Listings}
}

\newcommand{\review}[1]{\colorbox{orange}{#1}}