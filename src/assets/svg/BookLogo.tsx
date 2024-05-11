import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BookLogo = (props: SvgProps) => (
  <Svg
    width={200}
    height={190}
    viewBox="0 0 912 864"
    fill="none"
    {...props}
  >
    <Path
      d="M8.78267 725V655.182H32.3736C37.8509 655.182 42.3281 656.17 45.8054 658.148C49.3054 660.102 51.8963 662.75 53.5781 666.091C55.2599 669.432 56.1009 673.159 56.1009 677.273C56.1009 681.386 55.2599 685.125 53.5781 688.489C51.919 691.852 49.3509 694.534 45.8736 696.534C42.3963 698.511 37.9418 699.5 32.5099 699.5H15.6009V692H32.2372C35.9872 692 38.9986 691.352 41.2713 690.057C43.544 688.761 45.1918 687.011 46.2145 684.807C47.2599 682.58 47.7827 680.068 47.7827 677.273C47.7827 674.477 47.2599 671.977 46.2145 669.773C45.1918 667.568 43.5327 665.841 41.2372 664.591C38.9418 663.318 35.8963 662.682 32.1009 662.682H17.2372V725H8.78267ZM68.6293 725V672.636H76.402V680.545H76.9474C77.902 677.955 79.6293 675.852 82.1293 674.239C84.6293 672.625 87.4474 671.818 90.5838 671.818C91.1747 671.818 91.9134 671.83 92.7997 671.852C93.6861 671.875 94.3565 671.909 94.8111 671.955V680.136C94.5384 680.068 93.9134 679.966 92.9361 679.83C91.9815 679.67 90.9702 679.591 89.902 679.591C87.3565 679.591 85.0838 680.125 83.0838 681.193C81.1065 682.239 79.5384 683.693 78.3793 685.557C77.2429 687.398 76.6747 689.5 76.6747 691.864V725H68.6293ZM124.027 726.091C119.3 726.091 115.152 724.966 111.584 722.716C108.038 720.466 105.266 717.318 103.266 713.273C101.288 709.227 100.3 704.5 100.3 699.091C100.3 693.636 101.288 688.875 103.266 684.807C105.266 680.739 108.038 677.58 111.584 675.33C115.152 673.08 119.3 671.955 124.027 671.955C128.754 671.955 132.891 673.08 136.436 675.33C140.004 677.58 142.777 680.739 144.754 684.807C146.754 688.875 147.754 693.636 147.754 699.091C147.754 704.5 146.754 709.227 144.754 713.273C142.777 717.318 140.004 720.466 136.436 722.716C132.891 724.966 128.754 726.091 124.027 726.091ZM124.027 718.864C127.618 718.864 130.572 717.943 132.891 716.102C135.209 714.261 136.925 711.841 138.038 708.841C139.152 705.841 139.709 702.591 139.709 699.091C139.709 695.591 139.152 692.33 138.038 689.307C136.925 686.284 135.209 683.841 132.891 681.977C130.572 680.114 127.618 679.182 124.027 679.182C120.436 679.182 117.482 680.114 115.163 681.977C112.845 683.841 111.129 686.284 110.016 689.307C108.902 692.33 108.345 695.591 108.345 699.091C108.345 702.591 108.902 705.841 110.016 708.841C111.129 711.841 112.845 714.261 115.163 716.102C117.482 717.943 120.436 718.864 124.027 718.864ZM181.172 745.727C177.286 745.727 173.945 745.227 171.149 744.227C168.354 743.25 166.024 741.955 164.161 740.341C162.32 738.75 160.854 737.045 159.763 735.227L166.172 730.727C166.899 731.682 167.82 732.773 168.933 734C170.047 735.25 171.57 736.33 173.501 737.239C175.456 738.17 178.013 738.636 181.172 738.636C185.399 738.636 188.888 737.614 191.638 735.568C194.388 733.523 195.763 730.318 195.763 725.955V715.318H195.081C194.49 716.273 193.649 717.455 192.558 718.864C191.49 720.25 189.945 721.489 187.922 722.58C185.922 723.648 183.217 724.182 179.808 724.182C175.581 724.182 171.786 723.182 168.422 721.182C165.081 719.182 162.433 716.273 160.479 712.455C158.547 708.636 157.581 704 157.581 698.545C157.581 693.182 158.524 688.511 160.411 684.534C162.297 680.534 164.922 677.443 168.286 675.261C171.649 673.057 175.536 671.955 179.945 671.955C183.354 671.955 186.058 672.523 188.058 673.659C190.081 674.773 191.626 676.045 192.695 677.477C193.786 678.886 194.626 680.045 195.217 680.955H196.036V672.636H203.808V726.5C203.808 731 202.786 734.659 200.74 737.477C198.717 740.318 195.99 742.398 192.558 743.716C189.149 745.057 185.354 745.727 181.172 745.727ZM180.899 716.955C184.126 716.955 186.854 716.216 189.081 714.739C191.308 713.261 193.001 711.136 194.161 708.364C195.32 705.591 195.899 702.273 195.899 698.409C195.899 694.636 195.331 691.307 194.195 688.42C193.058 685.534 191.376 683.273 189.149 681.636C186.922 680 184.172 679.182 180.899 679.182C177.49 679.182 174.649 680.045 172.376 681.773C170.126 683.5 168.433 685.818 167.297 688.727C166.183 691.636 165.626 694.864 165.626 698.409C165.626 702.045 166.195 705.261 167.331 708.057C168.49 710.83 170.195 713.011 172.445 714.602C174.717 716.17 177.536 716.955 180.899 716.955ZM218.536 725V672.636H226.308V680.545H226.854C227.808 677.955 229.536 675.852 232.036 674.239C234.536 672.625 237.354 671.818 240.49 671.818C241.081 671.818 241.82 671.83 242.706 671.852C243.592 671.875 244.263 671.909 244.717 671.955V680.136C244.445 680.068 243.82 679.966 242.842 679.83C241.888 679.67 240.876 679.591 239.808 679.591C237.263 679.591 234.99 680.125 232.99 681.193C231.013 682.239 229.445 683.693 228.286 685.557C227.149 687.398 226.581 689.5 226.581 691.864V725H218.536ZM269.663 726.227C266.345 726.227 263.334 725.602 260.629 724.352C257.925 723.08 255.777 721.25 254.186 718.864C252.595 716.455 251.8 713.545 251.8 710.136C251.8 707.136 252.391 704.705 253.572 702.841C254.754 700.955 256.334 699.477 258.311 698.409C260.288 697.341 262.47 696.545 264.857 696.023C267.266 695.477 269.686 695.045 272.118 694.727C275.3 694.318 277.879 694.011 279.857 693.807C281.857 693.58 283.311 693.205 284.22 692.682C285.152 692.159 285.618 691.25 285.618 689.955V689.682C285.618 686.318 284.697 683.705 282.857 681.841C281.038 679.977 278.277 679.045 274.572 679.045C270.732 679.045 267.72 679.886 265.538 681.568C263.357 683.25 261.822 685.045 260.936 686.955L253.3 684.227C254.663 681.045 256.482 678.568 258.754 676.795C261.05 675 263.55 673.75 266.254 673.045C268.982 672.318 271.663 671.955 274.3 671.955C275.982 671.955 277.913 672.159 280.095 672.568C282.3 672.955 284.425 673.761 286.47 674.989C288.538 676.216 290.254 678.068 291.618 680.545C292.982 683.023 293.663 686.341 293.663 690.5V725H285.618V717.909H285.209C284.663 719.045 283.754 720.261 282.482 721.557C281.209 722.852 279.516 723.955 277.402 724.864C275.288 725.773 272.709 726.227 269.663 726.227ZM270.891 719C274.072 719 276.754 718.375 278.936 717.125C281.141 715.875 282.8 714.261 283.913 712.284C285.05 710.307 285.618 708.227 285.618 706.045V698.682C285.277 699.091 284.527 699.466 283.368 699.807C282.232 700.125 280.913 700.409 279.413 700.659C277.936 700.886 276.493 701.091 275.084 701.273C273.697 701.432 272.572 701.568 271.709 701.682C269.618 701.955 267.663 702.398 265.845 703.011C264.05 703.602 262.595 704.5 261.482 705.705C260.391 706.886 259.845 708.5 259.845 710.545C259.845 713.341 260.879 715.455 262.947 716.886C265.038 718.295 267.686 719 270.891 719ZM308.348 725V672.636H316.121V680.818H316.803C317.893 678.023 319.655 675.852 322.087 674.307C324.518 672.739 327.439 671.955 330.848 671.955C334.303 671.955 337.178 672.739 339.473 674.307C341.791 675.852 343.598 678.023 344.893 680.818H345.439C346.78 678.114 348.791 675.966 351.473 674.375C354.155 672.761 357.371 671.955 361.121 671.955C365.803 671.955 369.632 673.42 372.609 676.352C375.587 679.261 377.075 683.795 377.075 689.955V725H369.03V689.955C369.03 686.091 367.973 683.33 365.859 681.67C363.746 680.011 361.257 679.182 358.393 679.182C354.712 679.182 351.859 680.295 349.837 682.523C347.814 684.727 346.803 687.523 346.803 690.909V725H338.621V689.136C338.621 686.159 337.655 683.761 335.723 681.943C333.791 680.102 331.303 679.182 328.257 679.182C326.166 679.182 324.212 679.739 322.393 680.852C320.598 681.966 319.143 683.511 318.03 685.489C316.939 687.443 316.393 689.705 316.393 692.273V725H308.348ZM391.786 725V672.636H399.558V680.818H400.24C401.331 678.023 403.092 675.852 405.524 674.307C407.956 672.739 410.876 671.955 414.286 671.955C417.74 671.955 420.615 672.739 422.911 674.307C425.229 675.852 427.036 678.023 428.331 680.818H428.876C430.217 678.114 432.229 675.966 434.911 674.375C437.592 672.761 440.808 671.955 444.558 671.955C449.24 671.955 453.07 673.42 456.047 676.352C459.024 679.261 460.513 683.795 460.513 689.955V725H452.467V689.955C452.467 686.091 451.411 683.33 449.297 681.67C447.183 680.011 444.695 679.182 441.831 679.182C438.149 679.182 435.297 680.295 433.274 682.523C431.251 684.727 430.24 687.523 430.24 690.909V725H422.058V689.136C422.058 686.159 421.092 683.761 419.161 681.943C417.229 680.102 414.74 679.182 411.695 679.182C409.604 679.182 407.649 679.739 405.831 680.852C404.036 681.966 402.581 683.511 401.467 685.489C400.376 687.443 399.831 689.705 399.831 692.273V725H391.786ZM475.223 725V672.636H483.268V725H475.223ZM479.314 663.909C477.746 663.909 476.393 663.375 475.257 662.307C474.143 661.239 473.587 659.955 473.587 658.455C473.587 656.955 474.143 655.67 475.257 654.602C476.393 653.534 477.746 653 479.314 653C480.882 653 482.223 653.534 483.337 654.602C484.473 655.67 485.041 656.955 485.041 658.455C485.041 659.955 484.473 661.239 483.337 662.307C482.223 663.375 480.882 663.909 479.314 663.909ZM506.05 693.5V725H498.004V672.636H505.777V680.818H506.459C507.686 678.159 509.55 676.023 512.05 674.409C514.55 672.773 517.777 671.955 521.732 671.955C525.277 671.955 528.379 672.682 531.038 674.136C533.697 675.568 535.766 677.75 537.243 680.682C538.72 683.591 539.459 687.273 539.459 691.727V725H531.413V692.273C531.413 688.159 530.345 684.955 528.209 682.659C526.072 680.341 523.141 679.182 519.413 679.182C516.845 679.182 514.55 679.739 512.527 680.852C510.527 681.966 508.947 683.591 507.788 685.727C506.629 687.864 506.05 690.455 506.05 693.5ZM575.297 745.727C571.411 745.727 568.07 745.227 565.274 744.227C562.479 743.25 560.149 741.955 558.286 740.341C556.445 738.75 554.979 737.045 553.888 735.227L560.297 730.727C561.024 731.682 561.945 732.773 563.058 734C564.172 735.25 565.695 736.33 567.626 737.239C569.581 738.17 572.138 738.636 575.297 738.636C579.524 738.636 583.013 737.614 585.763 735.568C588.513 733.523 589.888 730.318 589.888 725.955V715.318H589.206C588.615 716.273 587.774 717.455 586.683 718.864C585.615 720.25 584.07 721.489 582.047 722.58C580.047 723.648 577.342 724.182 573.933 724.182C569.706 724.182 565.911 723.182 562.547 721.182C559.206 719.182 556.558 716.273 554.604 712.455C552.672 708.636 551.706 704 551.706 698.545C551.706 693.182 552.649 688.511 554.536 684.534C556.422 680.534 559.047 677.443 562.411 675.261C565.774 673.057 569.661 671.955 574.07 671.955C577.479 671.955 580.183 672.523 582.183 673.659C584.206 674.773 585.751 676.045 586.82 677.477C587.911 678.886 588.751 680.045 589.342 680.955H590.161V672.636H597.933V726.5C597.933 731 596.911 734.659 594.865 737.477C592.842 740.318 590.115 742.398 586.683 743.716C583.274 745.057 579.479 745.727 575.297 745.727ZM575.024 716.955C578.251 716.955 580.979 716.216 583.206 714.739C585.433 713.261 587.126 711.136 588.286 708.364C589.445 705.591 590.024 702.273 590.024 698.409C590.024 694.636 589.456 691.307 588.32 688.42C587.183 685.534 585.501 683.273 583.274 681.636C581.047 680 578.297 679.182 575.024 679.182C571.615 679.182 568.774 680.045 566.501 681.773C564.251 683.5 562.558 685.818 561.422 688.727C560.308 691.636 559.751 694.864 559.751 698.409C559.751 702.045 560.32 705.261 561.456 708.057C562.615 710.83 564.32 713.011 566.57 714.602C568.842 716.17 571.661 716.955 575.024 716.955ZM640.751 725V655.182H665.161C670.024 655.182 674.036 656.023 677.195 657.705C680.354 659.364 682.706 661.602 684.251 664.42C685.797 667.216 686.57 670.318 686.57 673.727C686.57 676.727 686.036 679.205 684.967 681.159C683.922 683.114 682.536 684.659 680.808 685.795C679.104 686.932 677.251 687.773 675.251 688.318V689C677.388 689.136 679.536 689.886 681.695 691.25C683.854 692.614 685.661 694.568 687.115 697.114C688.57 699.659 689.297 702.773 689.297 706.455C689.297 709.955 688.501 713.102 686.911 715.898C685.32 718.693 682.808 720.909 679.376 722.545C675.945 724.182 671.479 725 665.979 725H640.751ZM649.206 717.5H665.979C671.501 717.5 675.422 716.432 677.74 714.295C680.081 712.136 681.251 709.523 681.251 706.455C681.251 704.091 680.649 701.909 679.445 699.909C678.24 697.886 676.524 696.273 674.297 695.068C672.07 693.841 669.433 693.227 666.388 693.227H649.206V717.5ZM649.206 685.864H664.888C667.433 685.864 669.729 685.364 671.774 684.364C673.842 683.364 675.479 681.955 676.683 680.136C677.911 678.318 678.524 676.182 678.524 673.727C678.524 670.659 677.456 668.057 675.32 665.92C673.183 663.761 669.797 662.682 665.161 662.682H649.206V685.864ZM723.371 726.091C718.643 726.091 714.496 724.966 710.928 722.716C707.382 720.466 704.609 717.318 702.609 713.273C700.632 709.227 699.643 704.5 699.643 699.091C699.643 693.636 700.632 688.875 702.609 684.807C704.609 680.739 707.382 677.58 710.928 675.33C714.496 673.08 718.643 671.955 723.371 671.955C728.098 671.955 732.234 673.08 735.78 675.33C739.348 677.58 742.121 680.739 744.098 684.807C746.098 688.875 747.098 693.636 747.098 699.091C747.098 704.5 746.098 709.227 744.098 713.273C742.121 717.318 739.348 720.466 735.78 722.716C732.234 724.966 728.098 726.091 723.371 726.091ZM723.371 718.864C726.962 718.864 729.916 717.943 732.234 716.102C734.553 714.261 736.268 711.841 737.382 708.841C738.496 705.841 739.053 702.591 739.053 699.091C739.053 695.591 738.496 692.33 737.382 689.307C736.268 686.284 734.553 683.841 732.234 681.977C729.916 680.114 726.962 679.182 723.371 679.182C719.78 679.182 716.825 680.114 714.507 681.977C712.189 683.841 710.473 686.284 709.359 689.307C708.246 692.33 707.689 695.591 707.689 699.091C707.689 702.591 708.246 705.841 709.359 708.841C710.473 711.841 712.189 714.261 714.507 716.102C716.825 717.943 719.78 718.864 723.371 718.864ZM780.652 726.091C775.925 726.091 771.777 724.966 768.209 722.716C764.663 720.466 761.891 717.318 759.891 713.273C757.913 709.227 756.925 704.5 756.925 699.091C756.925 693.636 757.913 688.875 759.891 684.807C761.891 680.739 764.663 677.58 768.209 675.33C771.777 673.08 775.925 671.955 780.652 671.955C785.379 671.955 789.516 673.08 793.061 675.33C796.629 677.58 799.402 680.739 801.379 684.807C803.379 688.875 804.379 693.636 804.379 699.091C804.379 704.5 803.379 709.227 801.379 713.273C799.402 717.318 796.629 720.466 793.061 722.716C789.516 724.966 785.379 726.091 780.652 726.091ZM780.652 718.864C784.243 718.864 787.197 717.943 789.516 716.102C791.834 714.261 793.55 711.841 794.663 708.841C795.777 705.841 796.334 702.591 796.334 699.091C796.334 695.591 795.777 692.33 794.663 689.307C793.55 686.284 791.834 683.841 789.516 681.977C787.197 680.114 784.243 679.182 780.652 679.182C777.061 679.182 774.107 680.114 771.788 681.977C769.47 683.841 767.754 686.284 766.641 689.307C765.527 692.33 764.97 695.591 764.97 699.091C764.97 702.591 765.527 705.841 766.641 708.841C767.754 711.841 769.47 714.261 771.788 716.102C774.107 717.943 777.061 718.864 780.652 718.864ZM824.161 705.909L824.024 695.955H825.661L848.57 672.636H858.524L834.115 697.318H833.433L824.161 705.909ZM816.661 725V655.182H824.706V725H816.661ZM849.933 725L829.479 699.091L835.206 693.5L860.161 725H849.933ZM905.97 684.364L898.743 686.409C898.288 685.205 897.618 684.034 896.732 682.898C895.868 681.739 894.686 680.784 893.186 680.034C891.686 679.284 889.766 678.909 887.425 678.909C884.22 678.909 881.55 679.648 879.413 681.125C877.3 682.58 876.243 684.432 876.243 686.682C876.243 688.682 876.97 690.261 878.425 691.42C879.879 692.58 882.152 693.545 885.243 694.318L893.016 696.227C897.697 697.364 901.186 699.102 903.482 701.443C905.777 703.761 906.925 706.75 906.925 710.409C906.925 713.409 906.061 716.091 904.334 718.455C902.629 720.818 900.243 722.682 897.175 724.045C894.107 725.409 890.538 726.091 886.47 726.091C881.129 726.091 876.709 724.932 873.209 722.614C869.709 720.295 867.493 716.909 866.561 712.455L874.197 710.545C874.925 713.364 876.3 715.477 878.322 716.886C880.368 718.295 883.038 719 886.334 719C890.084 719 893.061 718.205 895.266 716.614C897.493 715 898.607 713.068 898.607 710.818C898.607 709 897.97 707.477 896.697 706.25C895.425 705 893.47 704.068 890.834 703.455L882.107 701.409C877.311 700.273 873.788 698.511 871.538 696.125C869.311 693.716 868.197 690.705 868.197 687.091C868.197 684.136 869.027 681.523 870.686 679.25C872.368 676.977 874.652 675.193 877.538 673.898C880.447 672.602 883.743 671.955 887.425 671.955C892.607 671.955 896.675 673.091 899.629 675.364C902.607 677.636 904.72 680.636 905.97 684.364ZM133.074 788.636C132.665 785.182 131.006 782.5 128.097 780.591C125.188 778.682 121.619 777.727 117.392 777.727C114.301 777.727 111.597 778.227 109.278 779.227C106.983 780.227 105.188 781.602 103.892 783.352C102.619 785.102 101.983 787.091 101.983 789.318C101.983 791.182 102.426 792.784 103.312 794.125C104.222 795.443 105.381 796.545 106.79 797.432C108.199 798.295 109.676 799.011 111.222 799.58C112.767 800.125 114.188 800.568 115.483 800.909L122.574 802.818C124.392 803.295 126.415 803.955 128.642 804.795C130.892 805.636 133.04 806.784 135.085 808.239C137.153 809.67 138.858 811.511 140.199 813.761C141.54 816.011 142.21 818.773 142.21 822.045C142.21 825.818 141.222 829.227 139.244 832.273C137.29 835.318 134.426 837.739 130.653 839.534C126.903 841.33 122.347 842.227 116.983 842.227C111.983 842.227 107.653 841.42 103.994 839.807C100.358 838.193 97.4943 835.943 95.4034 833.057C93.3352 830.17 92.1648 826.818 91.892 823H100.619C100.847 825.636 101.733 827.818 103.278 829.545C104.847 831.25 106.824 832.523 109.21 833.364C111.619 834.182 114.21 834.591 116.983 834.591C120.21 834.591 123.108 834.068 125.676 833.023C128.244 831.955 130.278 830.477 131.778 828.591C133.278 826.682 134.028 824.455 134.028 821.909C134.028 819.591 133.381 817.705 132.085 816.25C130.79 814.795 129.085 813.614 126.972 812.705C124.858 811.795 122.574 811 120.119 810.318L111.528 807.864C106.074 806.295 101.756 804.057 98.5739 801.148C95.392 798.239 93.8011 794.432 93.8011 789.727C93.8011 785.818 94.858 782.409 96.9716 779.5C99.108 776.568 101.972 774.295 105.562 772.682C109.176 771.045 113.21 770.227 117.665 770.227C122.165 770.227 126.165 771.034 129.665 772.648C133.165 774.239 135.938 776.42 137.983 779.193C140.051 781.966 141.142 785.114 141.256 788.636H133.074ZM188.02 819.591V788.636H196.065V841H188.02V832.136H187.474C186.247 834.795 184.338 837.057 181.747 838.92C179.156 840.761 175.884 841.682 171.929 841.682C168.656 841.682 165.747 840.966 163.202 839.534C160.656 838.08 158.656 835.898 157.202 832.989C155.747 830.057 155.02 826.364 155.02 821.909V788.636H163.065V821.364C163.065 825.182 164.134 828.227 166.27 830.5C168.429 832.773 171.179 833.909 174.52 833.909C176.52 833.909 178.554 833.398 180.622 832.375C182.713 831.352 184.463 829.784 185.872 827.67C187.304 825.557 188.02 822.864 188.02 819.591ZM210.801 841V788.636H218.574V796.818H219.256C220.347 794.023 222.108 791.852 224.54 790.307C226.972 788.739 229.892 787.955 233.301 787.955C236.756 787.955 239.631 788.739 241.926 790.307C244.244 791.852 246.051 794.023 247.347 796.818H247.892C249.233 794.114 251.244 791.966 253.926 790.375C256.608 788.761 259.824 787.955 263.574 787.955C268.256 787.955 272.085 789.42 275.062 792.352C278.04 795.261 279.528 799.795 279.528 805.955V841H271.483V805.955C271.483 802.091 270.426 799.33 268.312 797.67C266.199 796.011 263.71 795.182 260.847 795.182C257.165 795.182 254.313 796.295 252.29 798.523C250.267 800.727 249.256 803.523 249.256 806.909V841H241.074V805.136C241.074 802.159 240.108 799.761 238.176 797.943C236.244 796.102 233.756 795.182 230.71 795.182C228.619 795.182 226.665 795.739 224.847 796.852C223.051 797.966 221.597 799.511 220.483 801.489C219.392 803.443 218.847 805.705 218.847 808.273V841H210.801ZM294.239 841V788.636H302.011V796.818H302.693C303.784 794.023 305.545 791.852 307.977 790.307C310.409 788.739 313.33 787.955 316.739 787.955C320.193 787.955 323.068 788.739 325.364 790.307C327.682 791.852 329.489 794.023 330.784 796.818H331.33C332.67 794.114 334.682 791.966 337.364 790.375C340.045 788.761 343.261 787.955 347.011 787.955C351.693 787.955 355.523 789.42 358.5 792.352C361.477 795.261 362.966 799.795 362.966 805.955V841H354.92V805.955C354.92 802.091 353.864 799.33 351.75 797.67C349.636 796.011 347.148 795.182 344.284 795.182C340.602 795.182 337.75 796.295 335.727 798.523C333.705 800.727 332.693 803.523 332.693 806.909V841H324.511V805.136C324.511 802.159 323.545 799.761 321.614 797.943C319.682 796.102 317.193 795.182 314.148 795.182C312.057 795.182 310.102 795.739 308.284 796.852C306.489 797.966 305.034 799.511 303.92 801.489C302.83 803.443 302.284 805.705 302.284 808.273V841H294.239ZM399.631 842.091C394.585 842.091 390.233 840.977 386.574 838.75C382.938 836.5 380.131 833.364 378.153 829.341C376.199 825.295 375.222 820.591 375.222 815.227C375.222 809.864 376.199 805.136 378.153 801.045C380.131 796.932 382.881 793.727 386.403 791.432C389.949 789.114 394.085 787.955 398.812 787.955C401.54 787.955 404.233 788.409 406.892 789.318C409.551 790.227 411.972 791.705 414.153 793.75C416.335 795.773 418.074 798.455 419.369 801.795C420.665 805.136 421.312 809.25 421.312 814.136V817.545H380.949V810.591H413.131C413.131 807.636 412.54 805 411.358 802.682C410.199 800.364 408.54 798.534 406.381 797.193C404.244 795.852 401.722 795.182 398.812 795.182C395.608 795.182 392.835 795.977 390.494 797.568C388.176 799.136 386.392 801.182 385.142 803.705C383.892 806.227 383.267 808.932 383.267 811.818V816.455C383.267 820.409 383.949 823.761 385.312 826.511C386.699 829.239 388.619 831.318 391.074 832.75C393.528 834.159 396.381 834.864 399.631 834.864C401.744 834.864 403.653 834.568 405.358 833.977C407.085 833.364 408.574 832.455 409.824 831.25C411.074 830.023 412.04 828.5 412.722 826.682L420.494 828.864C419.676 831.5 418.301 833.818 416.369 835.818C414.438 837.795 412.051 839.341 409.21 840.455C406.369 841.545 403.176 842.091 399.631 842.091ZM433.551 841V788.636H441.324V796.545H441.869C442.824 793.955 444.551 791.852 447.051 790.239C449.551 788.625 452.369 787.818 455.506 787.818C456.097 787.818 456.835 787.83 457.722 787.852C458.608 787.875 459.278 787.909 459.733 787.955V796.136C459.46 796.068 458.835 795.966 457.858 795.83C456.903 795.67 455.892 795.591 454.824 795.591C452.278 795.591 450.006 796.125 448.006 797.193C446.028 798.239 444.46 799.693 443.301 801.557C442.165 803.398 441.597 805.5 441.597 807.864V841H433.551ZM476.045 860.636C474.682 860.636 473.466 860.523 472.398 860.295C471.33 860.091 470.591 859.886 470.182 859.682L472.227 852.591C474.182 853.091 475.909 853.273 477.409 853.136C478.909 853 480.239 852.33 481.398 851.125C482.58 849.943 483.659 848.023 484.636 845.364L486.136 841.273L466.773 788.636H475.5L489.955 830.364H490.5L504.955 788.636H513.682L491.455 848.636C490.455 851.341 489.216 853.58 487.739 855.352C486.261 857.148 484.545 858.477 482.591 859.341C480.659 860.205 478.477 860.636 476.045 860.636ZM590.574 788.636C590.165 785.182 588.506 782.5 585.597 780.591C582.688 778.682 579.119 777.727 574.892 777.727C571.801 777.727 569.097 778.227 566.778 779.227C564.483 780.227 562.688 781.602 561.392 783.352C560.119 785.102 559.483 787.091 559.483 789.318C559.483 791.182 559.926 792.784 560.812 794.125C561.722 795.443 562.881 796.545 564.29 797.432C565.699 798.295 567.176 799.011 568.722 799.58C570.267 800.125 571.688 800.568 572.983 800.909L580.074 802.818C581.892 803.295 583.915 803.955 586.142 804.795C588.392 805.636 590.54 806.784 592.585 808.239C594.653 809.67 596.358 811.511 597.699 813.761C599.04 816.011 599.71 818.773 599.71 822.045C599.71 825.818 598.722 829.227 596.744 832.273C594.79 835.318 591.926 837.739 588.153 839.534C584.403 841.33 579.847 842.227 574.483 842.227C569.483 842.227 565.153 841.42 561.494 839.807C557.858 838.193 554.994 835.943 552.903 833.057C550.835 830.17 549.665 826.818 549.392 823H558.119C558.347 825.636 559.233 827.818 560.778 829.545C562.347 831.25 564.324 832.523 566.71 833.364C569.119 834.182 571.71 834.591 574.483 834.591C577.71 834.591 580.608 834.068 583.176 833.023C585.744 831.955 587.778 830.477 589.278 828.591C590.778 826.682 591.528 824.455 591.528 821.909C591.528 819.591 590.881 817.705 589.585 816.25C588.29 814.795 586.585 813.614 584.472 812.705C582.358 811.795 580.074 811 577.619 810.318L569.028 807.864C563.574 806.295 559.256 804.057 556.074 801.148C552.892 798.239 551.301 794.432 551.301 789.727C551.301 785.818 552.358 782.409 554.472 779.5C556.608 776.568 559.472 774.295 563.062 772.682C566.676 771.045 570.71 770.227 575.165 770.227C579.665 770.227 583.665 771.034 587.165 772.648C590.665 774.239 593.438 776.42 595.483 779.193C597.551 781.966 598.642 785.114 598.756 788.636H590.574ZM634.474 842.091C629.429 842.091 625.077 840.977 621.418 838.75C617.781 836.5 614.974 833.364 612.997 829.341C611.043 825.295 610.065 820.591 610.065 815.227C610.065 809.864 611.043 805.136 612.997 801.045C614.974 796.932 617.724 793.727 621.247 791.432C624.793 789.114 628.929 787.955 633.656 787.955C636.384 787.955 639.077 788.409 641.736 789.318C644.395 790.227 646.815 791.705 648.997 793.75C651.179 795.773 652.918 798.455 654.213 801.795C655.509 805.136 656.156 809.25 656.156 814.136V817.545H615.793V810.591H647.974C647.974 807.636 647.384 805 646.202 802.682C645.043 800.364 643.384 798.534 641.224 797.193C639.088 795.852 636.565 795.182 633.656 795.182C630.452 795.182 627.679 795.977 625.338 797.568C623.02 799.136 621.236 801.182 619.986 803.705C618.736 806.227 618.111 808.932 618.111 811.818V816.455C618.111 820.409 618.793 823.761 620.156 826.511C621.543 829.239 623.463 831.318 625.918 832.75C628.372 834.159 631.224 834.864 634.474 834.864C636.588 834.864 638.497 834.568 640.202 833.977C641.929 833.364 643.418 832.455 644.668 831.25C645.918 830.023 646.884 828.5 647.565 826.682L655.338 828.864C654.52 831.5 653.145 833.818 651.213 835.818C649.281 837.795 646.895 839.341 644.054 840.455C641.213 841.545 638.02 842.091 634.474 842.091ZM668.395 841V788.636H676.168V796.545H676.713C677.668 793.955 679.395 791.852 681.895 790.239C684.395 788.625 687.213 787.818 690.349 787.818C690.94 787.818 691.679 787.83 692.565 787.852C693.452 787.875 694.122 787.909 694.577 787.955V796.136C694.304 796.068 693.679 795.966 692.702 795.83C691.747 795.67 690.736 795.591 689.668 795.591C687.122 795.591 684.849 796.125 682.849 797.193C680.872 798.239 679.304 799.693 678.145 801.557C677.009 803.398 676.44 805.5 676.44 807.864V841H668.395ZM704.114 841V788.636H712.159V841H704.114ZM708.205 779.909C706.636 779.909 705.284 779.375 704.148 778.307C703.034 777.239 702.477 775.955 702.477 774.455C702.477 772.955 703.034 771.67 704.148 770.602C705.284 769.534 706.636 769 708.205 769C709.773 769 711.114 769.534 712.227 770.602C713.364 771.67 713.932 772.955 713.932 774.455C713.932 775.955 713.364 777.239 712.227 778.307C711.114 779.375 709.773 779.909 708.205 779.909ZM748.849 842.091C743.804 842.091 739.452 840.977 735.793 838.75C732.156 836.5 729.349 833.364 727.372 829.341C725.418 825.295 724.44 820.591 724.44 815.227C724.44 809.864 725.418 805.136 727.372 801.045C729.349 796.932 732.099 793.727 735.622 791.432C739.168 789.114 743.304 787.955 748.031 787.955C750.759 787.955 753.452 788.409 756.111 789.318C758.77 790.227 761.19 791.705 763.372 793.75C765.554 795.773 767.293 798.455 768.588 801.795C769.884 805.136 770.531 809.25 770.531 814.136V817.545H730.168V810.591H762.349C762.349 807.636 761.759 805 760.577 802.682C759.418 800.364 757.759 798.534 755.599 797.193C753.463 795.852 750.94 795.182 748.031 795.182C744.827 795.182 742.054 795.977 739.713 797.568C737.395 799.136 735.611 801.182 734.361 803.705C733.111 806.227 732.486 808.932 732.486 811.818V816.455C732.486 820.409 733.168 823.761 734.531 826.511C735.918 829.239 737.838 831.318 740.293 832.75C742.747 834.159 745.599 834.864 748.849 834.864C750.963 834.864 752.872 834.568 754.577 833.977C756.304 833.364 757.793 832.455 759.043 831.25C760.293 830.023 761.259 828.5 761.94 826.682L769.713 828.864C768.895 831.5 767.52 833.818 765.588 835.818C763.656 837.795 761.27 839.341 758.429 840.455C755.588 841.545 752.395 842.091 748.849 842.091ZM819.861 800.364L812.634 802.409C812.179 801.205 811.509 800.034 810.622 798.898C809.759 797.739 808.577 796.784 807.077 796.034C805.577 795.284 803.656 794.909 801.315 794.909C798.111 794.909 795.44 795.648 793.304 797.125C791.19 798.58 790.134 800.432 790.134 802.682C790.134 804.682 790.861 806.261 792.315 807.42C793.77 808.58 796.043 809.545 799.134 810.318L806.906 812.227C811.588 813.364 815.077 815.102 817.372 817.443C819.668 819.761 820.815 822.75 820.815 826.409C820.815 829.409 819.952 832.091 818.224 834.455C816.52 836.818 814.134 838.682 811.065 840.045C807.997 841.409 804.429 842.091 800.361 842.091C795.02 842.091 790.599 840.932 787.099 838.614C783.599 836.295 781.384 832.909 780.452 828.455L788.088 826.545C788.815 829.364 790.19 831.477 792.213 832.886C794.259 834.295 796.929 835 800.224 835C803.974 835 806.952 834.205 809.156 832.614C811.384 831 812.497 829.068 812.497 826.818C812.497 825 811.861 823.477 810.588 822.25C809.315 821 807.361 820.068 804.724 819.455L795.997 817.409C791.202 816.273 787.679 814.511 785.429 812.125C783.202 809.716 782.088 806.705 782.088 803.091C782.088 800.136 782.918 797.523 784.577 795.25C786.259 792.977 788.543 791.193 791.429 789.898C794.338 788.602 797.634 787.955 801.315 787.955C806.497 787.955 810.565 789.091 813.52 791.364C816.497 793.636 818.611 796.636 819.861 800.364Z"
      fill="#EA6B6B"
    />
    <Path
      d="M456 247.333V567.333M456 247.333C456 172.66 456 135.323 441.467 106.801C428.683 81.713 408.287 61.3157 383.199 48.5323C354.677 34 317.34 34 242.667 34H209.333C190.665 34 181.331 34 174.2 37.633C167.928 40.829 162.829 45.9283 159.633 52.2003C156 59.3307 156 68.665 156 87.3333V447.333C156 466.003 156 475.337 159.633 482.467C162.829 488.74 167.928 493.837 174.2 497.033C181.331 500.667 190.665 500.667 209.333 500.667H307.556C325.562 500.667 334.565 500.667 343.271 502.22C350.998 503.597 358.537 505.877 365.73 509.02C373.835 512.557 381.326 517.55 396.307 527.54L456 567.333M456 247.333C456 172.66 456 135.323 470.533 106.801C483.317 81.713 503.713 61.3157 528.8 48.5323C557.323 34 594.66 34 669.333 34H702.667C721.337 34 730.67 34 737.8 37.633C744.073 40.829 749.17 45.9283 752.367 52.2003C756 59.3307 756 68.665 756 87.3333V447.333C756 466.003 756 475.337 752.367 482.467C749.17 488.74 744.073 493.837 737.8 497.033C730.67 500.667 721.337 500.667 702.667 500.667H604.443C586.437 500.667 577.433 500.667 568.73 502.22C561 503.597 553.463 505.877 546.27 509.02C538.167 512.557 530.673 517.55 515.693 527.54L456 567.333"
      stroke="#EA6B6B"
      strokeWidth={66.6667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BookLogo;