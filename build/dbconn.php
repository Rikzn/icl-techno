<?
define("BX_USE_MYSQLI", true);
define("DBPersistent", false);
$DBType = "mysql";
//$DBHost = "h807340975.mysql";
$DBHost = "localhost";
$DBLogin = "h807340975_u0";
$DBPassword = "B:E5gwhP";
$DBName = "h807340975_s0";
$DBDebug = false;
$DBDebugToFile = false;
define("MYSQL_TABLE_TYPE", "INNODB");

define("DELAY_DB_CONNECT", true);
define("CACHED_b_file", 3600);
define("CACHED_b_file_bucket_size", 10);
define("CACHED_b_lang", 3600);
define("CACHED_b_option", 3600);
define("CACHED_b_lang_domain", 3600);
define("CACHED_b_site_template", 3600);
define("CACHED_b_event", 3600);
define("CACHED_b_agent", 3660);
define("CACHED_menu", 3600);

define("BX_UTF", true);
define("BX_FILE_PERMISSIONS", 0644);
define("BX_DIR_PERMISSIONS", 0755);
@umask(~(BX_FILE_PERMISSIONS|BX_DIR_PERMISSIONS)&0777);
@ini_set("memory_limit", "512M");
define("BX_DISABLE_INDEX_PAGE", true);
define("BX_TEMPORARY_FILES_DIRECTORY", "/home/h807340975/cranecenter.ru/docs/bitrix/tmp/");
?>
