﻿
/*----------------------------------------------------------------------------
 CHIM - CHuoi's Input Method
----------------------------------------------------------------------------
 copyright         : (C) 2005, 2006, 2007 by Dao Hai Lam
 http:/xvnkb.sf.net/chim
 email             : daohailam<at>yahoo<dot>com
 last modify       : Thu, 05 Jul 2007 23:07:22 +0700
 version           : 0.9.3
----------------------------------------------------------------------------
 Mudim - Mudzot's Input Method
 (c)2008 by Mudzot
 http:/code.google.com/p/mudim
 email: mudzot<at>gmail.com
 version: 0.8
 date: 29.05.08
----------------------------------------------------------------------------
 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.
-------------------------------------------------------------------------------
 Packed with Dean Edwards' Packer ported to Python by Florian Schulze
----------------------------------------------------------------------------*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);return p}('J(2E(aF)==\'2D\'){}D=P(){L 4F};F=P(){L 4F};F.3E=[\'1e-15\',\'1e-6X\',\'1e-6W\',\'1e-6V\',\'1e-6U\'];F.6a=\'1e-6T\';F.67=\'1e-6S\';D.50=\'A\';D.51=\'a\';D.76=\'E\';D.77=\'e\';D.55=\'U\';D.56=\'u\';D.53=\'G\';D.54=\'g\';D.1M=\'Q\';D.1N=\'q\';D.78=\'y\';D.7a=\'Y\';D.aE=\'i\';D.aD=\'I\';D.3R=5U.5T(aC);D.29="8L";D.1R=" !@#$%^&*()8K+=-{}[]|\\\\:\\";\'<>?,./~`\\r\\n\\t";D.15=0;D.1f=[];D.1Q=V;D.3Q=P(u){K n,2y=D.2y;u=u.1l(0);1k(n=0;2y[n]!=0&&2y[n]!=u;n++){}L 2y[n]!=0?n:-1};D.52=P(u){K n,O=D.O;u=u.1l(0);1k(n=0;O[n]!=0&&O[n]!=u;n++){}L O[n]!=0?n:-1};D.7b=P(8N,8M){K 1G=D.1G;K n,i=-1,j=-1,u;1k(n=0,u=8N.1l(0);1G[n]!=0&&1G[n]!=u;n++){}J(1G[n]!=0){i=n}1k(n=0,u=8M.1l(0);1G[n]!=0&&1G[n]!=u;n++){}J(1G[n]){j=n}L i-j};D.2O=P(n,c){D.1f[n]=5U.5T(c)};D.W=P(){L 4F};D.W.1Y=14;D.W.1q=0;D.W.1d=0;D.W.29=[];D.W.6g=[];D.W.1W=P(){D.W.1Y=!D.W.1Y;F.1V()};D.W.4I=P(1q,Z){D.W.29[D.W.1d]=D.W.1q;D.W.6g[D.W.1d++]=Z;D.W.1q=1q};D.W.6b=P(){D.W.1q=-1;D.W.1d=0};D.W.8G=P(){L D.W.6g[D.W.1d-1]};F.6d="aB";F.8I="8L|aA|\'`~?.^*+=";F.8F="|az|ax|aw|av|at|as|ar|aq|ai|ap|an|au|am|al|ak|aj|ao|ah|ay|ag|af|ae|";F.8H="ad";F.1R="!@#$%^&*()8K+=-{}[]|\\\\:\\";\'<>?,./~`";F.8J=\'|c|ac|p|t|m|n|6k|6j|\';F.2F=P(Z,3G){K b=D.1f;K 11=b.X;K n=Z.1O();J(D.W.1Y&&!F.3J){J(3G>0&&D.15==0){J(F.1T.X>0){K 6f=F.8J.1i(\'|\'+F.1T+\'|\');J(6f<0){D.15=11;F.1T=\'\';L 14}S J(6f<9&&3G==2){K 4J=F.1s(n,2);J(4J!=0&&4J!=1&&4J!=5){D.15=11;F.1T=\'\';L 14}}}J(11==2&&(b[1]==D.56||b[1]==D.55)&&(b[0]==D.1N||b[0]==D.1M)&&(3G==2||(3G==1&&F.1s(n,1)==1))){D.15=11;L D.1S(11,c,Z)}}S J(!D.15){K 1I=F.8I.1i(Z);J(11>0){K 1n=b[11-1].1O()}J(11==0){J(F.8H.1i(Z)>=0){D.15=-1}S J(1I>=0&&1I<12){D.W.4I(0,Z)}S J(1I==12||1I>37){L}S{D.W.6b()}}S J(1I==12||1I>37){D.1H();L}S J(1I>12){D.15=11}S J(1I>=0){K i=0;1p(F.6d.1i(b[i])>=0){i++}J(i>0){F.1K=b.7c(0,i).2Q().2P(/,/g,\'\').1O()}J(D.W.1q<0){J(F.1K==\'q\'){J(11==1&&n!=\'u\'){D.15=11}S J(b[1]==\'u\'&&n==\'u\'){D.15=11}}S J(1n==\'p\'&&n!=\'h\'){D.15=11}S J(1n==\'k\'&&n!=\'i\'&&n!=\'e\'&&n!=\'y\'){D.15=11}S J(F.1K==\'ab\'&&n!=\'i\'&&n!=\'e\'){D.15=11}S{D.W.4I(11,Z);J(n==\'y\'){J(\'aa\'.1i(1n)<0){D.15=11}}S J(n==\'e\'||n==\'i\'){J(11>1&&(1n==\'g\')){D.15=11}J(1n==\'c\'){D.15=1}}}}S J(11-D.W.1q>1){D.15=11}S{K w="|"+D.W.8G().1O()+Z.1O()+"|";K 6e=F.8F.1i(w);J(6e<0){D.15=11}S J(6e<18&&(F.1K==\'c\'||F.1K==\'C\')){D.15=11}S J(1n==\'y\'&&F.1K==\'\'&&n!=\'e\'){D.15=11}S{D.W.4I(11,Z)}}}S{28(Z){19\'h\':19\'H\':J(1n>=D.3R||"a9".1i(1n)<0){D.15=11}1c;19\'g\':19\'G\':J(1n!=\'n\'&&1n!=\'N\'){D.15=11}1c;19\'r\':19\'R\':J(1n!=\'t\'&&1n!=\'T\'){D.15=11}1c;7d:J(F.6d.1i(1n)>=0){D.15=11}1c}}}J(D.15!=0){L 14}}L V};D.1S=P(1d,a8,Z){J(F.1R.1i(Z)>=0){D.1H();L}F.a7=\'a6\';D.1f.8E(Z);L F.4X(D.1C[F.1j-1][2].1E(0))};D.8g=P(Z){K p=-1;K i,j=-1;K b,c=0,a5,l;K 1d=D.1f.X;K m=D.1C[F.1j-1],n;K v=1m;J(!1d||D.15!=0||F.3K){J(F.2F(Z,l)){L D.1S(1d,c,Z)}L D.1S(0,0,Z)}b=D.1f;c=b[p=1d-1];n=Z.1O();1k(l=1;l<m.X;l++)J(m[l].1i(n)>=0){1c}J(l>=m.X){F.2F(Z,0);L D.1S(1d,c,Z)}J((p=F.4W(n))<0){F.2F(Z,0);L D.1S(1d,c,Z)}F.a4=\'a3\';J(F.2F(Z,l)){L D.1S(1d,c,Z)}c=b[p];K x=c.1l(0);K 3F=V;J(l==1){m=m[0];1k(i=0;!3F&&i<m.X;i++){K k=m[i];J(k[0]==n){1k(i=1;i<k.X;i++){v=D.7B[k[i]];F.4X(n);x=b[p].1l(0);J(F.1s(n,1)==3){p=0;c=b[p];x=c.1l(0)}J(F.1D(p,x,1,v,n,14)){J(p>0&&F.1s(n,1)==1&&p<1d-1&&D.52(b[p])>=0&&D.3Q(b[p-1])>=0&&b[0]!=D.1N&&b[0]!=D.1M){F.1D(p-1,b[p-1].1l(0),1,D.1F,n,V)}3F=14;1c}}1c}}}S{1k(i=0;i<D.2N.X;i++){v=D.2N[i];J(F.1D(p,x,2,v,n,14)){3F=14;1c}}}J(!3F){F.2F(Z,0);L D.1S(1d,c,Z)}J(D.15!=0){D.1f.8E(Z)}L p>=0};D.8y=P(){K 1d=D.1f.X;J(1d<=0){D.1Q=14}S{J(F.2H[0]==1d-1)F.3P();K i=D.1Z.X-1;K 6c=D.1f[1d-1].1l(0);1p(i>=0&&D.1Z[i]!=6c){i--}J(i<0){i=D.1F.X-1;1p(i>=0&&D.1F[i]!=6c){i--}}J(i>=0&&(i%2)==1){F.w--}--1d;D.1f.a2();J(1d==D.W.1q){D.W.1q=D.W.29[--D.W.1d]}J((D.15<0&&!1d)||(1d<=D.15)){D.15=0}}};D.1H=P(){D.15=0;F.w=0;D.W.6b();F.3P();F.1T=\'\';F.1K=\'\';F.27=0;F.26=0;J(D.1f.X>0){F.3K=V;F.3J=V}D.1f=[]};D.2L=P(){J(2E(F.3E)!="2D"&&F.1j<F.3E.X){K r;1k(K i=0;i<4;i++){r=1g.4H(F.3E[i]);J(r){r.4G=V}}r=1g.4H(F.3E[F.1j]);J(r){r.4G=14}}J(2E(F.6a)!="2D"){K r=1g.4H(F.6a);J(r){r.4G=D.W.1Y}}J(2E(F.67)!="2D"){K r=1g.4H(F.67);J(r){r.4G=F.1A}}};D.4R=P(){D.1H();F.1j=(++F.1j%5);D.2L();F.1V()};D.1v=P(m){D.1H();F.1j=m;D.2L();F.1V()};D.1W=P(){K p;J(!(p=F.1L)){F.4P()}J(F.1j==0){D.1v(F.4M)}S{F.4M=F.1j;D.1v(0)}F.1V()};D.5N=P(e){K r;J(e==1m){e=1y.4z}J(e==1m){L 1m}J(e.8D!=1m){r=e.8D}S{r=e.M;1p(r&&r.a1!=1)r=r.4E}J(r.2b==\'a0\'){r=r.4E}D.5M=r.2b==\'57\'||r.1B==\'9Z\'||r.1B==\'1w\';L r};D.2S=P(M){J(M==1m||M.1b==1m||M.1b.X==0){L-1}J(2E(M.3D)!=\'2D\'){J(M.3D<0||M.3D>M.X||M.66<0||M.66>M.X||M.66<M.3D){L-1}L M.3D}J(1g.1t){K 1t=1g.1t.60();K 23=M.61();J(23==1m||1t==1m||((1t.1w!="")&&23.9Y(1t)==V)){L-1}J(1t.1w==""){K 1o=1;J(M.2b=="9X"){K 63=23.1w;1p(1o<63.X){23.9W(63.2R(1o));J(23.8C==1t.8C){1c}1o++}}S J(M.2b=="9V"){K 62=1g.1t.60().9U();1o=M.1b.X+1;1p(62.9T()==M&&62.9S("22",1)==1){--1o;J(M.1b.1l(1o)==10){1o-=1}}J(1o==M.1b.X+1){1o=-1}}L 1o}L 23.1w.1i(1t.1w)}};D.7g=P(M,p){J(p<0){L}J(M.8B){M.8B(p,p)}S J(M.61){K 1h=M.61();1h.9R(14);1h.8m(\'22\',p);1h.4C(\'22\',p);1h.9Q()}};D.8h=P(M){D.1H();J(M.2b!=\'57\'){K 1R=D.1R;K c=D.2S(M)-1;J(c>0){1p(c>=0&&1R.1i(M.1b.1E(c))<0){D.1f.9P(M.1b.1E(c));c=c-1}}F.25=c+1}S{D.1f=D.1P.8n(M).4V(\'\')}D.1Q=V};D.8A=9;D.5X=8;D.5S=13;D.8x=46;D.5R=32;D.8i=9O;D.5W=37;D.5V=39;D.8w=36;D.8v=35;D.8u=33;D.8t=34;D.8s=38;D.8r=40;D.8p=9N;D.8o=5j;D.8q=9M;D.5O=17;D.5Q=16;D.9L=18;D.5K=P(1a,8z){28(1a){19 D.8A:19 D.5S:D.1H();1c;19 D.5X:J(!8z){D.8y()}1c;19 D.8x:19 D.5W:19 D.5V:19 D.8w:19 D.8v:19 D.8u:19 D.8t:19 D.8s:19 D.8r:D.1Q=14;1c}};D.8d=P(e,k){J(k==D.8q){F.4U();L 14}S J(k==D.8p||k==D.8o){D.1W();L 14}L V};D.1P=P(){L 4F};D.1P.5Y=P(M){J(!M.4E.3B){L}K 5Z=M.4E.3B.5J;L(!1y.2B&&1g.2A)?5Z.1g.1t.60():5Z.9K().9J(0)};D.1P.8n=P(M){K 1h=D.1P.5Y(M);J(!1h){L\'\'}J(!1y.2B&&1g.2A){1p(1h.4C(\'22\',-1)==-1){J(D.1R.1i(1h.1w.1E(0))>=0){1h.4C(\'22\',1);1c}}L 1h.1w}K 4D=\'\';K s;J(!(s=1h.8l.4B)){L\'\'}K c=1h.8k-1;J(c>0){1p(c>=0&&D.1R.1i(s.1E(c))<0&&s.1l(c)!=9I){4D=s.1E(c)+4D;c=c-1}}L 4D};D.1P.7i=P(M,l){K 1h=D.1P.5Y(M);J(2E(1h)==\'2D\'){L}K b=D.1f;J(!1y.2B&&1g.2A){K x=-l;1h.4C(\'22\',x);1h.8m(\'22\',x+b.X);1h.9H(b.2Q().2P(/,/g,\'\'));L}K 2C=1h.8l;K 3C=1h.8k;K 2a=3C-l;2C.4B=2C.4B.2R(0,2a)+b.2Q().2P(/,/g,\'\')+2C.4B.2R(2a+l);J(l<b.X){3C++}1h.9G(2C,3C);1h.9F(2C,3C)};D.5L=P(M){K 4A=F.6i;J(4A.X>0){1k(K i=0;i<4A.X;i++){J(M.1x==4A[i]){L 14}}}L V};D.4t=P(e){J(e==1m){e=1y.4z}J(e.8j==14){L}e.8j=14;K 1a=e.1a;J(1a==0){1a=e.4y}J(1a==0){1a=e.8a}J(F.1j==0){L}K M=1m;J(!(M=D.5N(e))||!D.5M||D.5L(M)){L}J(e.8c||e.8b||e.5P){J(1a==D.5X||1a==D.5W||1a==D.5V){D.1Q=14}L}J(e.4y==1m||e.4y!=0){K Z=5U.5T(1a);J(1a==D.5R||1a==D.5S){D.1H()}S J(1a>D.5R&&1a<D.8i){J(D.1Q){D.8h(M)}K l=D.1f.X;J(l==0){F.25=D.2S(M)}J(F.3I){D.1H();F.25=D.2S(M);F.3I=V}J(D.8g(Z)){J(e.8f){e.8f()}J(e.8e){e.8e()}e.9E=14;e.9D=V;F.7j(M,l)}}S{D.1Q=14}}S{D.5K(1a,14)}};D.4u=P(e){J(e==1m){e=1y.4z}J(e.1a==D.5Q){J(F.26==1){F.3K=14;F.26=0}}J(e.1a==D.5O){J(F.27==1){F.3J=14;F.27=0;F.3I=14}}};D.4v=P(e){K M=1m;J(e==1m){e=1y.4z}J(D.8d(e,e.1a)){L}J(e.9C||e.9B){L}J(e.9A||e.9z||e.5P){F.26|=1;J(e.1a!=D.5Q){F.26|=2}L}J(e.8c||e.8b||e.5P){F.27|=1;J(e.1a!=D.5O){F.27|=2}L}J(!(M=D.5N(e))||!D.5M||D.5L(M)){L}K 1a=e.1a;J(1a==0){1a=e.4y}J(1a==0){1a=e.8a}D.5K(1a,V)};D.4s=P(e){D.4O();D.1Q=14};D.4r=P(e,r){J(!e){L}J(!e.83){J(!r){J(!1y.2B&&1g.2A){e.4x(\'88\',D.4v);e.4x(\'87\',D.4u);e.4x(\'86\',D.4t);e.4x(\'84\',D.4s)}S{e.4w(\'9y\',D.4v,V);e.4w(\'9x\',D.4u,V);e.4w(\'9w\',D.4t,V);e.4w(\'9v\',D.4s,V)}}S{e.88=D.4v;e.87=D.4u;e.86=D.4t;e.84=D.4s}e.83=14}K f=e.82(\'3B\');1k(K i=0;i<f.X;i++){K 2z=(!1y.2B&&1g.2A)?f[i].5J.1g:f[i].81;5I{2z.3B=f[i];D.4r(2z,V)}5H(e){}}K f=e.82(\'9u\');1k(K i=0;i<f.X;i++){K 2z=(!1y.2B&&1g.2A)?f[i].5J.1g:f[i].81;5I{2z.3B=f[i];D.4r(2z,V)}5H(e){}}};D.4O=P(){5I{D.4r(1g,14);D.2L()}5H(9t){}};D.7Z=[65,4p,4n,4l,4j,4h];D.7Y=[97,4q,4o,4m,4k,4i];D.7X=[3z,3x,3v,3t,3r,3p];D.7W=[3A,3y,3w,3u,3s,3q];D.7V=[3n,3l,3j,3h,3f,3d];D.7U=[3o,3m,3k,3i,3g,3e];D.7T=[79,3a,30,2Y,2W,2U];D.7S=[3c,3b,31,2Z,2X,2V];D.7R=[2w,2u,2T,2r,2p,2n];D.7Q=[2x,2v,2t,2s,2q,2o];D.7P=[2l,2j,21,2g,2e,2c];D.7O=[2m,2k,2i,2h,2f,2d];D.7N=[85,4e,4c,4a,48,45];D.7M=[4g,4f,4d,4b,49,47];D.7L=[43,41,3Y,3W,3U,3S];D.7K=[44,42,3Z,3X,3V,3T];D.7J=[69,5E,5C,5A,5y,5w];D.7I=[5G,5F,5D,5B,5z,5x];D.7H=[5u,5s,5q,5o,5m,5k];D.7G=[5v,5t,5r,5p,5n,5l];D.7F=[73,5g,5e,5c,5a,58];D.7E=[5i,5h,5f,5d,5b,59];D.7D=[89,7u,7s,7q,7o,7m];D.7C=[5j,7v,7t,7r,7p,7n];D.2N=[D.7Z,D.7Y,D.7X,D.7W,D.7V,D.7U,D.7T,D.7S,D.7R,D.7Q,D.7P,D.7O,D.7N,D.7M,D.7L,D.7K,D.7J,D.7I,D.7H,D.7G,D.7F,D.7E,D.7D,D.7C];D.7A=[65,3z,4p,3x,4n,3v,4l,3t,4j,3r,4h,3p,3n,3z,3l,3x,3j,3v,3h,3t,3f,3r,3d,3p,97,3A,4q,3y,4o,3w,4m,3u,4k,3s,4i,3q,3o,3A,3m,3y,3k,3w,3i,3u,3g,3s,3e,3q];D.7x=[65,3n,4p,3l,4n,3j,4l,3h,4j,3f,4h,3d,3z,3n,3x,3l,3v,3j,3t,3h,3r,3f,3p,3d,97,3o,4q,3m,4o,3k,4m,3i,4k,3g,4i,3e,3A,3o,3y,3m,3w,3k,3u,3i,3s,3g,3q,3e];D.7y=[79,2w,3a,2u,30,2T,2Y,2r,2W,2p,2U,2n,2l,2w,2j,2u,21,21,2g,2r,2e,2p,2c,2n,3c,2x,3b,2v,31,2t,2Z,2s,2X,2q,2V,2o,2m,2x,2k,2v,2i,2t,2h,2s,2f,2q,2d,2o];D.1Z=[79,2l,3a,2j,30,21,2Y,2g,2W,2e,2U,2c,2w,2l,2u,2j,2T,21,2r,2g,2p,2e,2n,2c,3c,2m,3b,2k,31,2i,2Z,2h,2X,2f,2V,2d,2x,2m,2v,2k,2t,2i,2s,2h,2q,2f,2o,2d];D.1F=[85,43,4e,41,4c,3Y,4a,3W,48,3U,45,3S,4g,44,4f,42,4d,3Z,4b,3X,49,3V,47,3T];D.7z=[69,5u,5E,5s,5C,5q,5A,5o,5y,5m,5w,5k,5G,5v,5F,5t,5D,5r,5B,5p,5z,5n,5x,5l];D.7w=[68,7k,2G,7l];D.7B=[D.7A,D.7z,D.7y,D.7x,D.1Z,D.1F,D.7w];D.1C=[[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6]],\'9s\',\'9r\'],[[[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'9q\',\'9p\'],[[[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'^+(d\',"=\'`?~."],[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6],[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'9o\',"9n"]];D.2y=[85,4e,4c,4a,48,45,4g,4f,4d,4b,49,47,43,41,3Y,3W,3U,3S,44,42,3Z,3X,3V,3T,73,5g,5e,5c,5a,58,5i,5h,5f,5d,5b,59,0];D.O=[79,3a,30,2Y,2W,2U,3c,3b,31,2Z,2X,2V,2w,2u,2T,2r,2p,2n,2x,2v,2t,2s,2q,2o,2l,2j,21,2g,2e,2c,2m,2k,2i,2h,2f,2d,0];D.1G=[97,65,4q,4p,4o,4n,4m,4l,4k,4j,4i,4h,3A,3z,3y,3x,3w,3v,3u,3t,3s,3r,3q,3p,3o,3n,3m,3l,3k,3j,3i,3h,3g,3f,3e,3d,5G,69,5F,5E,5D,5C,5B,5A,5z,5y,5x,5w,5v,5u,5t,5s,5r,5q,5p,5o,5n,5m,5l,5k,3c,79,3b,3a,31,30,2Z,2Y,2X,2W,2V,2U,2x,2w,2v,2u,2t,2T,2s,2r,2q,2p,2o,2n,2m,2l,2k,2j,2i,21,2h,2g,2f,2e,2d,2c,5j,89,7v,7u,7t,7s,7r,7q,7p,7o,7n,7m,4g,85,4f,4e,4d,4c,4b,4a,49,48,47,45,44,43,42,41,3Z,3Y,3X,3W,3V,3U,3T,3S,5i,73,5h,5g,5f,5e,5d,5c,5b,5a,59,58,7l,7k,0];F.7j=P(M,l){K b=D.1f;J(M.2b==\'57\'){D.1P.7i(M,l);J(l<D.1f.X){L}L V}K 2a=F.25<0?0:F.25;K 7h=D.2S(M);K t=M.7f;M.1b=M.1b.2R(0,2a)+b.2Q().2P(/,/g,\'\')+M.1b.2R(7h);D.7g(M,2a+b.X);M.7f=t};F.4W=P(7e){K k=7e.1O();K m=D.1C[F.1j-1];K b=D.1f;K 11=b.X;K i,j,l,p,c;J(!11||D.15!=0){L-1}1k(i=1;i<m.X;i++)J(m[i].1i(k)>=0){1c}p=11-1;F.9m=\'9l\';28(l=i){19 1:J(F.1s(k,1)==3){1c}19 2:7d:i=p;1p(i>=0&&b[i]<D.3R&&D.29.1i(b[i])<0)i--;J(i<0){L-1}J(i<11-1){F.1T=b.7c(i+1,11).2Q().2P(/,/g,\'\').1O()}1p(i-1>=0&&(D.29.1i(b[i-1])>=0||b[i-1]>D.3R)&&D.7b(b[i-1],b[i])<0)i--;J(i==11-1&&i-1>=0&&(j=D.3Q(b[i-1]))>0){28(b[i]){19 D.51:19 D.50:J((i-2<0||(j<24&&b[i-2]!=D.1N&&b[i-2]!=D.1M)||(j>=24&&b[i-2]!=D.54&&b[i-2]!=D.53))&&(l==2||(l==1&&F.1s(k,1)==1)))i--;1c;19 D.56:19 D.55:J(i-2<0||(b[i-2]!=D.54&&b[i-2]!=D.53))i--;1c;19 D.7a:19 D.78:J((!F.1A)&&i-2>=0&&b[i-2]!=D.1N&&b[i-2]!=D.1M){i--}1c}}J(i==11-1&&i-1>=0&&D.52(b[i-1])>0){28(b[i]){19 D.51:19 D.50:J(!F.1A&&(l==2||(l==1&&F.1s(k,1)!=1)))i--;1c;19 D.77:19 D.76:J(!F.1A)i--;1c}}J(i==11-2&&i-1>=0){K 4Z=D.3Q(b[i]);J(4Z>=0&&4Z<24&(b[i-1]==D.1N||b[i-1]==D.1M)){i++}}p=i;1c};J(F.1s(k,1)==3&&b[0]==\'d\'){L 0}L p};F.1D=P(20,74,2M,75,Z,4Y){K v=75;K i;1k(i=0;i<v.X;i++){J(v[i]==74){28(2M){19 1:J(F.1s(Z,1)==1){F.w++}J(i%2==0){D.2O(20,v[i+1])}S{D.2O(20,v[i-1]);J(4Y){D.15=D.1f.X+1}}1c;19 2:K j=F.1s(Z,2);J(j>=0){J(j!=i){D.2O(20,v[j]);F.2H=[20,(D.1f[20]).1l(0),v,Z]}S{D.2O(20,v[0]);F.3P();J(4Y){D.15=D.1f.X+1}}}1c}L 14}}L V};F.3P=P(){F.2H=[-1,0,1m,\'z\']};F.4X=P(72){J(D.15!=0){L V}K p=F.4W(72);K a=F.2H;K b=D.1f;K v,i,j,c;J(p<0){L V}i=D.1Z.X-1;c=b[p].1l(0);1p(i>=0&&D.1Z[i]!=c){i--}j=D.1F.X-1;J(p>0){c=b[p-1].1l(0);1p(j>=0&&D.1F[j]!=c){j--}}S{j=-1}J(p<b.X-1&&p>0&&i>=0&&j>=0){J(F.w==1){J(i%2==0){F.1D(p,b[p].1l(0),1,D.1Z,D.1C[F.1j-1][1].1E(1),V);J(b[0]==D.1N||b[0]==D.1M){F.1D(p-1,b[p-1].1l(0),1,D.1F,D.1C[F.1j-1][1].1E(1),V)}}S{J(b[0]!=D.1N&&b[0]!=D.1M){F.1D(p-1,b[p-1].1l(0),1,D.1F,D.1C[F.1j-1][1].1E(1),V)}}L 14}}J(a[0]>=0&&p>0&&a[0]!=p){F.1D(a[0],a[1],2,a[2],a[3],V);1k(i=0;i<D.2N.X;i++){v=D.2N[i];J(F.1D(p,b[p].1l(0),2,v,a[3],14)){1c}}L 14}L V};F.1s=P(Z,2M){K m=D.1C[F.1j-1];J(F.1j!=4){L m[2M].1i(Z)}S{K j=-1;1k(K i=0;i<2;i++){j=D.1C[i][2M].1i(Z);J(j>=0){L j}}L j}};F.1V=P(){K d=9k 9j();d.9i(d.9h()+9g);K 71=\';9f=\'+d.9e()+\';9d=/\';K 1b=F.1j;K 1b=D.W.1Y?1b+8:1b;1b=F.1A?1b+16:1b;1b=F.1z?1b+32:1b;1b+=F.1J*64;1g.70=\'|1e-6Z=\'+1b+71};F.6Y=P(){K c=1g.70.4V(\';\');1k(K i=0;i<c.X&&c[i].1i(\'|1e-6Z\')<0;i++);J(i==c.X){D.2L()}S{K 1b=9c(c[i].4V(\'=\')[1],10);F.1j=1b&7;D.W.1Y=(1b&8)?14:V;D.1A=(1b&16)?14:V;F.1z=(1b&32)?14:V;F.1J=(1b&64)>>6}};F.6Q=P(){F.1A=!F.1A};F.4U=P(){F.1z=!F.1z;F.1L.1U.3L=F.1z?\'\':\'4T\';F.1V()};F.6o=P(){F.1z=14;F.1L.1U.3L=\'\'};F.6n=P(){F.1z=V;F.1L.1U.3L=\'4T\'};F.4P=P(){J(!F.1L){F.6Y();F.3H=[\'<2I 1x="6O" 1U="1q: 6N; 6M: 0; 6L:0; 9b:0; 6K: 2G%; 6J: 3O 6I 6H; 6G: 3O; 6F: \'+F.4K+\'; 6E:\'+F.4L+\'; z-1o:2G; 6D:6C(3N=80); 3N:.80; 1w-6B: 6A; 6z-6y: 6x;"><a 3M="6w://1e.6v.6u" 6t="6s\\\'s 6r 6q" 1r="F.4S();L V;">F</a> 9a.8 <1X 2K="1e" 1x="1e-15" 1r="F.1v(0);" 1B="2J">\'+F.1u[0]+\'<1X 2K="1e" 1x="1e-6X" 1r="F.1v(1);" 1B="2J"> \'+F.1u[1]+\' <1X 2K="1e" 1x="1e-6W" 1r="F.1v(2);" 1B="2J"> \'+F.1u[2]+\' <1X 2K="1e" 1x="1e-6V" 1r="F.1v(3);" 1B="2J"> \'+F.1u[3]+\' <1X 2K="1e" 1x="1e-6U" 1r="F.1v(4);" 1B="2J"> \'+F.1u[4]+\' <1X 1x="1e-6T" 1r="6R:F.6m();" 1B="6P">\'+F.1u[5]+\'<1X 1x="1e-6S" 1r="6R:F.6Q();" 1B="6P">\'+F.1u[6]+\' [&99;<a 3M="#" 1r="F.1W();L V;">\'+F.1u[7]+\'</a> (98) <a 3M="#" 1r="F.4U();L V;">\'+F.1u[8]+\'</a> (96) ]</2I>\',\'<2I 1x="6O" 1U="1q: 6N; 6M: 0; 6L: 0; 6K: 95; 6J: 3O 6I 6H; 6G: 3O; 6F: \'+F.4K+\'; 6E:\'+F.4L+\'; z-1o:2G; 6D:6C(3N=80); 3N:.80;  1w-6B: 6A; 6z-6y: 6x;"><a 3M="6w://1e.6v.6u" 6t="6s\\\'s 6r 6q" 1r="F.4S();L V;">F</a></2I>\'];K f=1g.94(\'2I\');f.6l=F.3H[F.1J];f.1U.3L=\'4T\';1g.6p.93(f,1g.6p.92);F.1L=f;J(F.1z){F.6o()}S{F.6n()}}};F.6m=P(){D.W.1W()};F.1W=P(){D.1W()};F.4S=P(){J(F.1J){F.1J=0}S{F.1J=1}F.4Q();F.1L.6l=F.3H[F.1J];F.4N();F.1V()};F.1v=P(m){D.1v(m)};F.4R=P(){D.4R()};F.4Q=P(){};F.4N=P(){};F.6h=P(){F.4Q();F.4P();D.4O();F.4N()};F.91=P(){L F.1L.90.1U};F.1j=4;F.1A=14;F.4M=4;F.1z=14;F.2H=[-1,0,1m,-1];F.w=0;F.3K=V;F.3J=V;F.3I=V;F.27=0;F.26=0;F.1K=\'\';F.1T=\'\';F.25=0;F.4L=\'8Z\';F.4K=\'8Y\';F.1u=[\'Tắt\',\'8X\',\'8W\',\'8V\',\'Tổ6k hợp\',\'8Uí6j tả\',\'Bỏ dấu 8Tểu mới\',\'Bật/Tắt\',\'Ẩn/8Sện\'];F.6i=[];F.1J=0;F.3H=[\'\',\'\'];F.8R=8Q;1k(K i=1;i<2G;i++){8P("F.6h()",8O*i)}',62,662,'|||||||||||||||||||||||||||||||||||||||CHIM||Mudim||||if|var|return|target|||function|||else|||false|Speller|length||key||len|||true|off||||case|keyCode|value|break|count|mudim|buffer|document|range|indexOf|method|for|charCodeAt|null|lkey|index|while|position|onclick|GetMarkTypeID|selection|LANG|SetMethod|text|id|window|showPanel|newAccentRule|type|modes|PutMark|charAt|vn_UW|VN|ClearBuffer|kp|displayMode|headConsonants|Panel|CHAR_Q|CHAR_q|toLowerCase|HTMLEditor|dirty|separators|Append|tailConsonants|style|SetPreference|Toggle|input|enabled|vn_OW|pos|7900|character|textRange||startWordOffset|shiftSerie|ctrlSerie|switch|vowels|start|tagName|7906|7907|7904|7905|7902|7903|7901|7898|7899|416|417|7896|7897|7894|7895|7892|7893|7891|7888|7889|212|244|UI|doc|all|opera|container|undefined|typeof|CheckSpell|100|accent|div|radio|name|SetDisplay|group|vncode_2|SetCharAt|replace|toString|substring|GetCursorPosition|7890|7884|7885|213|245|7886|7887|210|242|||||||||211|243|111|7862|7863|7860|7861|7858|7859|7856|7857|7854|7855|258|259|7852|7853|7850|7851|7848|7849|7846|7847|7844|7845|194|226|iframe|offset|selectionStart|DISPLAY_ID|found|grp|panels|newTempDisableSpellCheckRequest|tempDisableSpellCheck|tempOff|display|href|opacity|1px|ResetAccentInfo|CharIsUI|CHAR_0x80|7920|7921|7918|7919|7916|7917|7914|7915||7912|7913|431|432|7908||7909|360|361|7910|7911|217|249|218|250|117|7840|7841|195|227|7842|7843|192|224|193|225|Attach|MouseDown|KeyHandler|KeyUp|KeyDown|addEventListener|attachEvent|charCode|event|ign|nodeValue|moveStart|word|parentNode|this|checked|getElementById|Set|typeid|PANEL_BACKGROUND|COLOR|oldMethod|AfterInit|Activate|InitPanel|BeforeInit|SwitchMethod|ToggleDisplayMode|None|TogglePanel|split|FindAccentPos|AdjustAccent|checkDouble|uipos|CHAR_A|CHAR_a|CharIsO|CHAR_G|CHAR_g|CHAR_U|CHAR_u|HTML|7882|7883|296|297|7880|7881|204|236|205|237|105|121|7878|7879|7876|7877|7874|7875|7872|7873|7870|7871|202|234|7864|7865|7868|7869|7866|7867|200|232|201|233|101|catch|try|contentWindow|ProcessControlKey|Freeze|peckable|GetTarget|VK_CTRL|metaKey|VK_SHIFT|VK_SPACE|VK_ENTER|fromCharCode|String|VK_RIGHT_ARROW|VK_LEFT_ARROW|VK_BACKSPACE|GetRange|win|createRange|createTextRange|caret|contents|||selectionEnd|ACCENTRULE_ID|||SPELLCHECK_ID|Clear|code|consonants|idx|ecIdx|lasts|Init|IGNORE_ID|nh|ng|innerHTML|ToggleSpeller|HidePanel|ShowPanel|body|Method|Input|Mudzot|title|com|googlecode|http|10pt|size|font|center|align|alpha|filter|color|background|padding|black|solid|border|width|right|bottom|fixed|mudimPanel|checkbox|ToggleAccentRule|javascript|accentrule|checkspell|auto|viqr|telex|vni|GetPreference|settings|cookie|tail|vk||charCodeAtPos|subsTab|CHAR_E|CHAR_e|CHAR_y||CHAR_Y|CharPriorityCompare|slice|default|nKey|scrollTop|SetCursorPosition|end|Process|UpdateUI|272|273|7924|7925|7928|7929|7926|7927|7922|7923|221|253|vn_DD|vn_AW|vn_OO|vn_EE|vn_AA|vncode_1|vn_y0|vn_Y0|vn_i0|vn_I0|vn_e6|vn_E6|vn_e0|vn_E0|vn_u7|vn_U7|vn_u0|vn_U0|vn_o7|vn_O7|vn_o6|vn_O6|vn_o0|vn_O0|vn_a8|vn_A8|vn_a6|vn_A6|vn_a0|vn_A0||contentDocument|getElementsByTagName|chim|onmousedown||onkeypress|onkeyup|onkeydown||which|ctrlLeft|ctrlKey|IsHotkey|preventDefault|stopPropagation|AddKey|UpdateBuffer|VK_LIMIT|isHandled|startOffset|startContainer|moveEnd|GetCurrentWord|VK_ONOFF2|VK_ONOFF|VK_PANELTOGGLE|VK_DOWN_ARROW|VK_UP_ARROW|VK_PAGE_DOWN|VK_PAGE_UP|VK_END|VK_HOME|VK_DELETE|BackSpace|release|VK_TAB|setSelectionRange|boundingLeft|srcElement|push|vwchk|Last|nvchk|spchk|tailConsonantsPattern|_|AIUEOYaiueoy|u2|u1|2000|setTimeout|140|REV|Hi|ki|Ch|Viqr|Telex|VNI|lightYellow|Black|firstChild|GetPanelStyle|lastChild|insertBefore|createElement|50px|F8||F9|nbsp|v0|left|parseInt|path|toGMTString|expires|604800000|getTime|setTime|Date|new|ot|is|0123456zsfrxj|6789ewoda|zsfrxj|ewoda|012345|6789|exc|frame|mousedown|keypress|keyup|keydown|shiftLeft|shiftKey|altLeft|altKey|returnValue|cancelBubble|setStart|setEnd|pasteHTML|160|getRangeAt|getSelection|VK_ALT|119|120|128|unshift|select|collapse|move|parentElement|duplicate|TEXTAREA|findText|INPUT|inRange|textarea|BODY|nodeType|pop|dz|lord|cc|mu|my|lastkey|CGKNPTcgknpt|hklms|ngh|ch|FfJjWwZz|yu|io|uu|eo||ie|eu|ia|iu|oi||ui|uo|ua|ye|ou||oe|ue|uy||oa|BDFJKLQSVWXZbdfjklqsvwxz|BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz|0x80|CHAR_I|CHAR_i|console'.split('|'),0,{}))
Mudim.BeforeInit = function() {
	//Mudim.COLOR='Black';
	//Mudim.PANEL_BACKGROUND='lightBlue';
	//Mudim.LANG=['Tắt','VNI','Telex','Viqr','Tổng hợp','Chính tả','Bỏ dấu kiểu mới','Bật/Tắt','Ẩn/Hiện bảng điều khiển'];
	Mudim.IGNORE_ID = ['email'];
};
Mudim.AfterInit = function() {
	//s = Mudim.GetPanelStyle();
	//s.fontSize = '14pt';
	//s.fontFamily = 'Serif';
};
