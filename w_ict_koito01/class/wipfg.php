<?php
/**
 * Class for Query data for Process V11
 */
class wip
{

  public function jsonWipFg($frm='')
  {
        $DB=connect_oci::DB('GTMS');
        $sql = "BEGIN SIN_WIP_FG_STK.SIN_MAIM_WIP_FG(:pMainWipFg); END;";
    		$result = oci_parse($DB, $sql);

    		// Declare cursor for OUT SYS_REFCURSOR
    		$objCursor = oci_new_cursor($DB);

    		// Bind parameters
    		oci_bind_by_name($result, ':pMainWipFg', $objCursor, -1, OCI_B_CURSOR);

    		// Execute
    		oci_execute ($result);
    		oci_execute($objCursor);

    		Utility::jsonOci($objCursor,$DB);
    		oci_free_statement($result);
    		oci_close($DB);
  }

  public function jsonWipMINUS($frm='')
  {
        $DB=connect_oci::DB('GTMS');
        $sql = "BEGIN SIN_WIP_FG_STK.SIN_MAIM_WIP_FG_MINUS(:pMainWipMINUS); END;";
    		$result = oci_parse($DB, $sql);

    		// Declare cursor for OUT SYS_REFCURSOR
    		$objCursor = oci_new_cursor($DB);

    		// Bind parameters
    		oci_bind_by_name($result, ':pMainWipMINUS', $objCursor, -1, OCI_B_CURSOR);

    		// Execute
    		oci_execute ($result);
    		oci_execute($objCursor);

    		Utility::jsonOci($objCursor,$DB);
    		oci_free_statement($result);
    		oci_close($DB);
  }

  public function jsonDetailWipFg($frm='')
  {
        $DB = connect_oci::DB('GTMS');
        $sql = "SELECT
            F.I_FAC_CD
            ,F.I_ITEM_CD
            ,M.I_ITEM_DESC
            ,SUM(NVL(CASE WHEN F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY > 0
                      THEN F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY END,0)
            ) AS STOCK_ONHAND
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'01          '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_STORE_IN
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WSMA        '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WSMA
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WSMB        '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WSMB
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WSM         '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WSM
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WAIA        '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WAIA
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WAIR        '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WAIR
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WAIR2       '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WAIR2
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WAI         '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WAI
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WMI         '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WMI
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'WTU         '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_WTU
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'OQA         '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_OQA
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'QA          '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_QA
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'04          '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_REJECT
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'REWORK      '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_REWORK
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'ASSY        '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_ASSY
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'DOC         '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_DOC
            ,SUM(DECODE(F.I_STOCK_LOCATION
                        ,'05          '
                        ,(F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY))
                ) AS STK_STORE_OUT
            ,SUM(CASE WHEN F.I_STOCK_LOCATION <> 'WSMA        '
                   AND F.I_STOCK_LOCATION <> 'WSMB        '
                   AND F.I_STOCK_LOCATION <> 'WSM         '
                   AND F.I_STOCK_LOCATION <> 'WAIA        '
                   AND F.I_STOCK_LOCATION <> 'WAIR        '
                   AND F.I_STOCK_LOCATION <> 'WAI         '
                   AND F.I_STOCK_LOCATION <> 'WMI         '
                   AND F.I_STOCK_LOCATION <> 'WTU         '
                   AND F.I_STOCK_LOCATION <> 'OQA         '
                   AND F.I_STOCK_LOCATION <> 'QA          '
                   AND F.I_STOCK_LOCATION <> '04          '
                   AND F.I_STOCK_LOCATION <> 'REWORK      '
                   AND F.I_STOCK_LOCATION <> 'ASSY        '
                   AND F.I_STOCK_LOCATION <> 'DOC         '
                   AND F.I_STOCK_LOCATION <> '01          '
                   AND F.I_STOCK_LOCATION <> '05          '
                   THEN (F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY)
                   END) AS STK_OTHER
            ,F.I_LOT_NO
            ,F.I_STOCK_MNTH
            FROM T_FC_STOCK_MS F
            LEFT OUTER JOIN T_PM_MS M ON F.I_ITEM_CD = M.I_ITEM_CD
            WHERE 1 = 1
            AND F.I_STOCK_MNTH = (SELECT T.I_STOCK_MNTH FROM T_DATE_MS T WHERE T.I_FAC_CD = 'FAC01')";

  if($frm[Item] != ''){
      $sql.="AND F.I_ITEM_CD LIKE '$frm[Item]%'";
  }
  if($frm[Item_Desc] != ''){
     $sql.="AND M.I_ITEM_DESC LIKE '$frm[Item_Desc]%'";
  }
  if($frm[Model] != ''){
     $sql.="AND M.I_ITEM_DESC LIKE '$frm[Model]%'";
  }
  if($frm[lot_no] != ''){
     $sql.="AND F.I_LOT_NO LIKE '$frm[lot_no]%'";
  }

    $sql.="AND F.I_MNTH_START_QTY + F.I_CUR_IN_QTY - F.I_CUR_OUT_QTY + F.I_CUR_ADJST_QTY - F.I_CUR_LOSS_QTY + F.I_TRN_IN_QTY - F.I_TRN_OUT_QTY <> 0
          GROUP BY
            F.I_FAC_CD
            ,F.I_ITEM_CD
            ,M.I_ITEM_DESC
            ,F.I_LOT_NO
            ,F.I_STOCK_MNTH
            ORDER BY F.I_ITEM_CD,F.I_LOT_NO";
        //echo $sql;
        $result = oci_parse($DB, $sql);
        oci_execute($result);
        Utility::jsonOci($result,$DB);
        oci_free_statement($result);
        oci_close($DB);
  }

  public function jsonWipGroupPJ($frm='')
  {
        $date = ($frm['date'] ==''||$frm['date'] =='00' ? date('Ym') : $frm['date']);
        $DB=connect_oci::DB('GTMS');
        $sql = "BEGIN SIN_WIP_FG_STK.SIN_WIP_GROUP_PJ(:pDate,:pWipGroupPJ); END;";
        $result = oci_parse($DB, $sql);

        // Declare cursor for OUT SYS_REFCURSOR
        $objCursor = oci_new_cursor($DB);

        // Variable
    		$strDate  = $date;

    		// Bind parameters
    		oci_bind_by_name($result, ':pDate', $strDate,200);
        oci_bind_by_name($result, ':pWipGroupPJ', $objCursor, -1, OCI_B_CURSOR);

        // Execute
        oci_execute ($result);
        oci_execute($objCursor);

        Utility::jsonOci($objCursor,$DB);
        oci_free_statement($result);
        oci_close($DB);
  }


}
?>
